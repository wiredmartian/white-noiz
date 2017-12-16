//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';


@Injectable()
export class ArtistProvider {

  endpoint: string = 'api/artists/';

  constructor(private provider: ApiProvider) {

  }
  getOneArtist(id: any){
    return this.provider.http.get(this.provider.apiUrl + this.endpoint + id)
    .map(res => res.json());
  }

}
