import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrackInterface } from '../../interfaces/track';
//import WaveSurfer from 'wavesurfer.js';
//import Amplitude from 'amplitudejs';

@IonicPage()
@Component({
  selector: 'page-track-detail',
  templateUrl: 'track-detail.html',
})
export class TrackDetailPage {
  track: TrackInterface;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.track = navParams.get('track');
  }
}
