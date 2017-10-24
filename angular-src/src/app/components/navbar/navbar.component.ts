import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  count: number;

  constructor(private searchService: SearchService,
              private appService : AppService,
              private router: Router) { }

  ngOnInit() {
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

}
