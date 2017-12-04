import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';


@Injectable()
export class TrackProvider {

  endpoints: string[] = ['api/tracks', 'api/toptracks'];
  
  constructor(public provider: ApiProvider) {
  }
  getTracks(){
    return this.provider.http.get(this.provider.url + this.endpoints[0])
    .map(res => res.json());
  }
  getTopTracks(){
    return this.provider.http.get(this.provider.url + this.endpoints[1])
    .map(res => res.json());
  }
}
