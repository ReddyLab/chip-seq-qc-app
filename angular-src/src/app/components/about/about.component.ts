import {Component, OnInit} from '@angular/core';
import { trigger,
  state,
  style,
  animate,
  transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
      trigger('enter_state', [
        transition('* => *', [
          style({ opacity: 0 }),
          animate('500ms', style({ opacity: 1 }))
        ])
      ])]
})
export class AboutComponent implements OnInit {

  constructor() {

  }
  ngOnInit() {
  }
}
