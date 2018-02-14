import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';


@Injectable()
export class AccountProvider {
  endpoint: string = 'token';
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_HOME_PAGE = 'HAS_SEEN_HOME_PAGE';

  constructor(
    private provider: ApiProvider, 
    private storage: Storage,
    private menu: MenuController) {
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
    this.storage.set(this.HAS_SEEN_HOME_PAGE, true);
    this.setUsername(username);
    this.enableMenu(true);
  };

  logout(): void {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove(this.HAS_SEEN_HOME_PAGE);
    this.storage.remove('accesstoken');
    this.storage.remove('username');
    this.enableMenu(false);
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

  enableMenu(loggedIn: boolean) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }
}
