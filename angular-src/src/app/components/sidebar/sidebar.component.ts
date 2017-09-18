import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { SearchService } from '../../services/search.service';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() input: string;
  @Input() results: Array<string> = [];
  selectedSample: Object;
  subscribed: Subscription;
  show: boolean;

  constructor(private searchService : SearchService,
  private appService : AppService,
              private router : Router) {
  }

  ngOnInit() {
    this.subscribed = this.appService.getSideBarStatus().subscribe(data => {
      this.show = data;
    });
  }

  ngOnDestroy() {
    this.subscribed.unsubscribe();
  }

  hasResults(results): void {
    if(this.results && this.results.length > 0) {
      this.show = true;
    }
  }

  clickSample(result): void {
    this.router.navigate(['/sample', result.sample]);
  }

  onClose(): void {
    this.appService.sideBarClose()
  }

  regexBold(sample_name: string): string {
    if(this.input.length == 0) {
      return sample_name;
    }
    let re = RegExp(this.input, "gi");
    return sample_name.replace(re, "<strong>" + "$&" + "</strong>");
  }

}
