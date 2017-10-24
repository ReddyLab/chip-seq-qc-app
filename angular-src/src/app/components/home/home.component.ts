import { Component, OnInit } from '@angular/core';
import { trigger,
  state,
  style,
  animate,
  transition } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('enter_state', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 }))
      ])
    ])]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
