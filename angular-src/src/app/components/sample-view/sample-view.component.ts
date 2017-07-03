import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-sample-view',
  templateUrl: './sample-view.component.html',
  styleUrls: ['./sample-view.component.css']
})

export class SampleViewComponent implements OnInit {
  @Input() sample: any;
  subscribed : Subscription;
  // Variables for chart data
  options: any = {
    responsive: true
  };
  setting: string;
  param: string;
  data: Array<any>;
  labels: Array<any>;



  constructor(private searchService: SearchService,
  private domSanitizer : DomSanitizer) {
  }

  ngOnInit() {
    this.subscribed = this.searchService.getSample().subscribe(data => {
      this.sample = data;
      this.getArrayData();
    });
    this.setting = "bar"; // Default chart type is bar
    this.param = "reads_in_peaks"; // Default data displayed is reads in peaks
  }

  ngOnDestroy() {
    this.subscribed.unsubscribe();
  }

  photoURL() {
    return this.domSanitizer.bypassSecurityTrustUrl('data:image/png;base64,'+this.sample.image);
  }

  graphExists() {
    return (this.sample.length > 0);
  }

  getArrayData() {
    this.searchService.retrieveSamplesSameFactor(this.sample.factor_name).subscribe(data => {
      this.data = [];
      this.labels = [];
      let points = [];
      for(let i = 0; i < data.samples.length; i++) {
        let obj = data.samples[i];
        let label = obj.sample.replace(this.sample.factor_name, '');
        this.labels.push(label);
        points.push(obj[this.param]);
      }
      this.data = [{data : points}];
    });
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
