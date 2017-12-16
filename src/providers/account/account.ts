import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
//import { UserModel } from '../../models/user-model';
import { Storage } from '@ionic/storage';


@Injectable()
export class AccountProvider {
  endpoint: string = 'token';
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(
    private provider: ApiProvider, 
    private storage: Storage) {
    this.getUsername();
  }

  requestToken(credentials : any){
    return this.provider.http.post(this.provider.apiUrl + this.endpoint, credentials)
    .map(res => res.json());
  };

  setUsername(username: string): void{
    this.storage.set('username', username);
  };

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  setAccessToken(token: string): void{
    this.storage.set('accesstoken', token);
  };

  getAccessToken(): Promise<boolean>{
    return this.storage.get('accesstoken')
    .then((accessToken) => {
      return accessToken == null ? null : accessToken;
    });
  };

  login(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
  };

  logout(): void {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('accesstoken');
    this.storage.remove('username');
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

  getUserPicture(username: string){
    return this.provider.http.get(this.provider.apiUrl + 'api/artists/profile/' + username)
    .map(res => res.json());
  }
}
