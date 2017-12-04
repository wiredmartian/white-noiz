import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-track-detail',
  templateUrl: 'track-detail.html',
})
export class TrackDetailPage {
  track: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.track = navParams.get('track');
  }

}
