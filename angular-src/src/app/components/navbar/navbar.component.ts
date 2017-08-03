import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../services/search.service';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  input: String;
  results: Array<Object>;

  constructor(private searchService: SearchService,
              private appService : AppService) { }

  ngOnInit() {
  }

  // Retrieves query results
  onSearchSubmit(): void {
    // Show view
    this.appService.sideBarOpen();
    this.searchService.retrieveSamples(this.input).subscribe(data => {
      if(data.success) {
        this.results = data.samples;
      }
      else {
        console.log('Query failed');
      }
    })
  }

}
