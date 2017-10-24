import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";

@Injectable()
export class SearchService {
  private subject = new Subject<any>();
  private num = new Subject<number>();

  constructor(private http: Http) { }

  // Retrieve all samples in database.
  retrieveSamples(input, num) {
    if(input.length == 0) {
      return;
    }

    let params = new URLSearchParams();
    params.set('input', input);
    params.set('page', num);
    this.num.next(num);
    return this.http.get('http://' + location.hostname + ':3000/samples/get_samples', {search: params})
      .map(res => res.json());
  }



  // Retrieve one sample by name
  retrieveSampleByName(name) {
    let params = new URLSearchParams();
    params.set('input', name);
    return this.http.get('http://' + location.hostname + ':3000/samples/get_sample', {search: params})
      .map(res => res.json());
  }

  // Retrieve samples of the same factor name
  retrieveSamplesSameFactor(factor) {
    let params = new URLSearchParams();
    params.set('factor', factor);
    return this.http.get('http://' + location.hostname + ':3000/samples/chart_data', {search: params})
      .map(res => res.json());
  }

  // Return page number as an observable
  getPageNumber() {
    return this.num.asObservable();
  }

}
