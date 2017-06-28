import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../services/search.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  input: String;
  results: Array<Object>;

  constructor(
    private searchService: SearchService,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSearchSubmit() {
    if(!this.searchService.validateInput(this.input)) {
      this.flashMessages.show('Must be at least 1 character long with no special characters', {
        cssClass: 'alert-danger', timeout: 500
      });
    }

    this.searchService.retrieveSamples(this.input).subscribe(data => {
      if(data.success) {
        console.log('Query successful');
        this.results = data.samples;

      }
      else {
        console.log('Query failed');
      }
    })
  }
}
