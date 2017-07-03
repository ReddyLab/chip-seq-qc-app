import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  show: boolean = false;

  constructor(private searchService: SearchService,
              private appService : AppService,
              private router : Router) { }

  ngOnInit() {
  }

  // Retrieves query results
  onSearchSubmit(): void {
    // Show view
    this.show = true;
    this.appService.sideBarOpen();
    this.router.navigateByUrl('sample');
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
