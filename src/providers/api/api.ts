//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiProvider {
  http: Http;
  url: string;

  constructor(public _http: Http) {
    this.http = _http;
    this.url = 'http://localhost:49749/';
  }

}
