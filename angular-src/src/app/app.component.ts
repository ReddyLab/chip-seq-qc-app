import { OnInit, OnDestroy, Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { HomeComponent } from 'app/components/home/home.component';
import { SampleViewComponent } from 'app/components/sample-view/sample-view.component';

import { SearchService } from 'app/services/search.service';
import { AppService } from 'app/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private sideBarSubscribe: Subscription;
  componentData = null;
  searchOpen: boolean = false;  // App starts with closed search bar

  constructor(private searchService : SearchService,
  private appService : AppService) {
    this.appService.getSideBarStatus().subscribe(data => {
      this.searchOpen = data;
    })
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.sideBarSubscribe.unsubscribe();
  }

  createSampleViewComponent() {
    this.componentData = {
      component: SampleViewComponent,
      inputs: {
        sample: this.searchService.getSample()
      }
    };
  }
}
