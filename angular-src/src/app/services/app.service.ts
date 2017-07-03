import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AppService {
  private sideBarSubject = new Subject<boolean>();

  constructor() { }

  sideBarOpen(): void {
    this.sideBarSubject.next(true);
  }

  sideBarClose(): void {
    this.sideBarSubject.next(false);
  }

  getSideBarStatus() {
    return this.sideBarSubject.asObservable();
  }

}
