import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AudioTrack } from '../../interfaces/audio';
import { AlbumProvider } from '../../providers/album/album';
import { AudioProvider } from '../../providers/audio/audio';
import { TrackDetailPage } from '../track-detail/track-detail';
import { TrackInterface } from '../../interfaces/track';
import { AlbumInterface } from '../../interfaces/album';
import WaveSurfer from 'wavesurfer.js';
//import Observer from 'wavesurfer.js/src/util/observer.js';

@IonicPage()
@Component({
  selector: 'page-album-detail',
  templateUrl: 'album-detail.html',
})
export class AlbumDetailPage {
  id: any;
  album: AlbumInterface;
  albumTracks: TrackInterface[];
  element: HTMLElement;
  wavesurfer: WaveSurfer;
  mediaURL: string = 'http://whitenoiz.azurewebsites.net'
  params : any = {
    container: '#waveform',
    waveColor: 'violet',
    backend: 'MediaElement',
    progressColor: '#8e3cfe',
    barWidth: 0,
    height: 18,
    scrollParent: false,
    fillParent: true,
    hideScrollbar: true,
    normalize: true,
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provider: AlbumProvider,
    public audio: AudioProvider
  ) { }

  ionViewDidLoad(){
    this.getAlbum();
  }

  getAlbum(){
    this.provider.getOneAlbum(this.navParams.get('id')).subscribe(response => {
      this.albumTracks = response.album_tracks;
      this.album = response.album_data;
    });
  }
  goToTrackDetail(track: any){
    this.navCtrl.push(TrackDetailPage, {
      track: track
    });
  }

  onPlay(track: AudioTrack, $event){
    this.element = $event.target;
    this.audio.Play(track, this.element);
  }

  onReady() : void {
    this.wavesurfer.on('ready', () =>{
      this.wavesurfer.play();
    });
  }
  onPause() : void {
    this.audio.Pause();
  }
}
