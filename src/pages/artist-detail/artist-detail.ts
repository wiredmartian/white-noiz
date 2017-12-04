import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtistProvider } from '../../providers/artist/artist';
import { ArtistInterface } from '../../interfaces/artist';
import { TrackInterface } from '../../interfaces/track';
import { AlbumInterface } from '../../interfaces/album';
import { SocialInterface } from '../../interfaces/social';

@IonicPage()
@Component({
  selector: 'page-artist-detail',
  templateUrl: 'artist-detail.html',
})
export class ArtistDetailPage {
  artist: any;
  artist_data: ArtistInterface;
  tracks: TrackInterface[];
  albums: AlbumInterface[];
  links: SocialInterface;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private _provider: ArtistProvider) {
      this.artist = this.navParams.get('artist');
  }

  ionViewDidLoad(){
    this.getOneArtist();
  }
  getOneArtist(){
    this._provider.getOneArtist(this.artist.artistId).subscribe(res =>{
      this.artist_data = res;
      this.links = this.artist_data.artist_networks;
      this.albums = this.artist_data.artist_albums;
      this.tracks = this.artist_data.artist_tracks;
    });
  }

}
