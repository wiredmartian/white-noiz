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
    this.getTracks();
  }
  getTracks(){
    let loading = this.loadingCtrl.create({
      content: 'Fetching data...'
    });
    loading.present()

    this.provider.getTracks().subscribe(res => {
        this.tracks =  res;
        loading.dismiss();
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

}
