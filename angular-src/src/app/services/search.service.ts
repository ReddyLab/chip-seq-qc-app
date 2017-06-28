import { Injectable } from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  // Inputs are at least 1 character long
  validateInput(input) {
    return (input.length > 0)
  }

  // Retrieve all samples in database.
  retrieveSamples(input) {
    let params = new URLSearchParams();
    params.set('input', input);
    return this.http.get('http://localhost:3000/samples/get_samples', {search: params})
      .map(res => res.json());
  }
}
