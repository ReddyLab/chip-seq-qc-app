import {Component, OnDestroy, OnInit, HostListener, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


import { SearchService } from '../../services/search.service';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  @ViewChild('search_form') search_form;
  input: string;
  asyncResults: Array<Object>;
  results: Array<Object>;
  count: number;
  clickedInside: boolean;


  constructor(private searchService: SearchService,
              private appService : AppService) {

  }

  ngOnInit() {
    this.appService.getResultsStatus().subscribe(data => {
      this.clickedInside = data;
    })
  }

  @HostListener('document:click', ['$event']) onClick($event) {
    console.log(this.clickedInside);
    let target = $event.target;
    if (!this.search_form.nativeElement.contains(target)) {
      this.appService.setResultsStatus(false);
    } else {
      this.appService.setResultsStatus(true);
    }
  }


  onSearchInput(): void {
    // Any time key is pressed, show results
    this.appService.setResultsStatus(true);
    if (this.input) {
      this.searchService.asyncSearchInput(this.input).
        subscribe(data => {
        this.asyncResults = data.samples;
        });
    }
  }

  onSampleNameClick(sample): void {
    this.input = sample;
    this.appService.setResultsStatus(false);
    this.onSearchSubmit();
  }

  // Retrieves query results
  onSearchSubmit(): void {
    // Show view
    this.appService.sideBarOpen();
    // Default start on first page
    this.searchService.retrieveSamples(this.input, 1).subscribe(data => {
      if(data.success) {
        this.results = data.samples;
        this.count = data.total_length;
      }
      else {
        console.log('Query failed');
      }
    });
  }

  regexBold(sample_name: string): string {
    if(this.input.length == 0) {
      return sample_name;
    }
    let re = RegExp(this.input, "gi");
    return sample_name.replace(re, "<strong>" + "$&" + "</strong>");
  }


}
