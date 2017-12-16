import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrackProvider } from '../../providers/track/track';
import { LoadingController } from 'ionic-angular';
import { TrackDetailPage } from '../track-detail/track-detail';
import { ArtistDetailPage } from '../artist-detail/artist-detail';
import { TrackInterface } from '../../interfaces/track';
import { ArtistInterface } from '../../interfaces/artist';

@IonicPage()
@Component({
  selector: 'page-track-list',
  templateUrl: 'track-list.html',
})
export class TrackListPage {

  track: TrackInterface;
  tracks: TrackInterface[];
  artist: ArtistInterface;
  mediaURL: string = 'http://whitenoiz.azurewebsites.net'

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private provider: TrackProvider) {
  }

  ionViewDidLoad(){
    this.presentLoading();
    this.getTracks();
  }
  getTracks(){
      this.provider.getTracks().subscribe(res => {
            this.tracks =  res;
    });
  }
  goToTrackDetail(track: any){
    this.navCtrl.push(TrackDetailPage, {
      track: track
    });
  }
  viewArtist(artist: ArtistInterface){
    this.navCtrl.push(ArtistDetailPage, {
      artist: artist
    });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5000,
    });
    loader.present();
  }

}
