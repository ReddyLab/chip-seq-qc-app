import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { trigger,
         state,
         style,
         animate,
         transition } from '@angular/animations';

import { SearchService } from '../../services/search.service';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('sidebarState', [
      transition(':enter', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate('250ms', style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)', opacity: 1}),
        animate('250ms', style({transform: 'translateX(-100%)', opacity: 1}))
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Input() input: string;
  @Input() results: Array<string> = [];
  @Input() count: number;
  page: number;
  selected_samples: Array<string> = [];
  selectedSample: Object;
  page_num_subscription: Subscription;
  subscribed: Subscription;
  show: boolean;

  constructor(
    private searchService : SearchService,
    private appService : AppService) {
  }

  ngOnInit() {
    this.subscribed = this.appService.getSideBarStatus().subscribe(data => {
      this.show = data;
    });
    this.page_num_subscription = this.searchService.getPageNumber().subscribe(data => {
      this.page = data;
    });
  }


  ngOnDestroy() {
    this.subscribed.unsubscribe();
    this.page_num_subscription.unsubscribe();
  }

  onClose(): void {
    this.appService.sideBarClose()
  }

  sampleOnClick(result): void {
    this.selected_samples.push(result);
  }

  pageNumberOnClick(num): void {
    if (num == this.page) {
      return;
    }
    this.page = num;
    this.searchService.retrieveSamples(this.input, this.page).subscribe(data => {
      if(data.success) {
        this.results = data.samples;
      }
    })
  }

  upperPageNumber(): number {
    if(this.page*6 > this.count) {
      return this.count;
    }
    return this.page*6;
  }

  pageNumberNext(): void {
    this.pageNumberOnClick(this.page+1);
  }

  pageNumberPrev(): void {
    this.pageNumberOnClick(this.page-1);
  }

  pageNumbers(): any {
    let page_nums = [];
    let curr_index = this.page - 2;
    while (page_nums.length < 5 && curr_index * 6 < this.count + 5) {
      if (curr_index > 0) {
        page_nums.push(curr_index);
      }
      curr_index++;
    }
    return page_nums;
  }

  regexBold(sample_name: string): string {
    if(this.input.length == 0) {
      return sample_name;
    }
    let re = RegExp(this.input, "gi");
    return sample_name.replace(re, "<strong>" + "$&" + "</strong>");
  }

}
