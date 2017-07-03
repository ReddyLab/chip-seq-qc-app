import { Component, OnInit, Input} from '@angular/core';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() input: String;
  @Input() results: Array<Object> = [];
  selectedSample: Object;
  @Input() show: boolean;

  constructor(private searchService : SearchService) { }

  ngOnInit() {
  }

  hasResults(results): void {
    if(this.results && this.results.length > 0) {
      this.show = true;
    }
  }

  clickSample(sample): void {
    this.selectedSample = sample;
    this.searchService.setSample(this.selectedSample);
  }

  onClose(): void {
    this.show = false;
  }

}
