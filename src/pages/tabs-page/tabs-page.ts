import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';


import { AlbumListPage } from '../album-list/album-list';
import { TrackListPage } from '../track-list/track-list';
import { AccountPage } from '../account/account';


@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = TrackListPage;
  tab2Root: any = AlbumListPage;
  tab3Root: any = AlbumListPage;
  tab4Root: any = AccountPage;
  tab5Root: any = AlbumListPage;
  
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
