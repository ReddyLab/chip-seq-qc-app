import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SampleViewComponent } from 'app/components/sample-view/sample-view.component';

import { SearchService } from 'app/services/search.service';
import { AppService } from 'app/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  private sideBarSubscribe: Subscription;
  componentData = null;
  searchOpen: boolean = false;  // App starts with closed search bar

  constructor(private searchService : SearchService,
  private appService : AppService) {
    this.sideBarSubscribe = this.appService.getSideBarStatus().subscribe(data => {
      this.searchOpen = data;
    })
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.sideBarSubscribe.unsubscribe();
  }

}
