import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { AppService} from './services/app.service';
import { SearchService } from './services/search.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SampleViewComponent } from './components/sample-view/sample-view.component';
import { KeysPipe } from './pipes/keys.pipe';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { LoadDirective } from './directives/load.directive';
import { NotAvailPipe } from './pipes/not-avail.pipe';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sample', component: SampleViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    SampleViewComponent,
    KeysPipe,
    DynamicComponent,
    LoadDirective,
    NotAvailPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ChartsModule
  ],
  providers: [SearchService, AppService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
