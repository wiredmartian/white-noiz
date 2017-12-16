//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

@Injectable()
export class AlbumProvider {
  
  endpoint: string = 'api/albums/';

  constructor(private provider: ApiProvider) { }

  getAlbums(){
    return this.provider.http.get(this.provider.apiUrl + this.endpoint)
    .map(res => res.json());
  }

  getOneAlbum(id: any){
    return this.provider.http.get(this.provider.apiUrl + this.endpoint + id)
    .map(res => res.json());
  }
}
