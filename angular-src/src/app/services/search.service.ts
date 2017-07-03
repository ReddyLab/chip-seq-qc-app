import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";

@Injectable()
export class SearchService {
  private subject = new Subject<any>();

  constructor(private http: Http) { }

  // Retrieve all samples in database.
  retrieveSamples(input) {
    if(input.length == 0) {
      return;
    }
    let params = new URLSearchParams();
    params.set('input', input);
    return this.http.get('http://localhost:3000/samples/get_samples', {search: params})
      .map(res => res.json());
  }

  // Retrieve samples of the same factor name
  retrieveSamplesSameFactor(factor) {
    let params = new URLSearchParams();
    params.set('factor', factor);
    return this.http.get('http://localhost:3000/samples/chart_data', {search: params})
      .map(res => res.json());
  }

  // Send sample
  setSample(sample) {
    this.subject.next(sample);
    console.log("Sample was set to" + JSON.stringify(sample));
  }

  // Get sample
  getSample() {
    return this.subject.asObservable();
  }

}
