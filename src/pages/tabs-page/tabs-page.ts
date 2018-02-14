import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';


import { AlbumListPage } from '../album-list/album-list';
import { TrackListPage } from '../track-list/track-list';
import { AccountPage } from '../account/account';
import { ChartsPage } from '../charts/charts';
import { SettingsPage } from '../settings/settings';


@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = TrackListPage;
  tab2Root: any = AlbumListPage;
  tab3Root: any = ChartsPage;
  tab4Root: any = AccountPage;
  tab5Root: any = SettingsPage;

  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
