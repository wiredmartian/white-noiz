import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlbumProvider } from '../../providers/album/album';
import { TrackDetailPage } from '../track-detail/track-detail';
import { TrackInterface } from '../../interfaces/track';
import { AlbumInterface } from '../../interfaces/album';
import WaveSurfer from 'wavesurfer.js';

@IonicPage()
@Component({
  selector: 'page-album-detail',
  templateUrl: 'album-detail.html',
})
export class AlbumDetailPage {
  id: any;
  album: AlbumInterface;
  albumTracks: TrackInterface[];
  wavesurfer: WaveSurfer;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provider: AlbumProvider) {
  }
  ionViewDidLoad(){
    this.getAlbum();
  }
  ngAfterViewInit(){
    requestAnimationFrame(() =>{
      this.wavesurfer = WaveSurfer.create({
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
      });
    });
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

  play(src: string){
    
    this.wavesurfer.load(src);
    this.wavesurfer.loaded = true;
    this.wavesurfer.on('ready', function(){
      this.wavesurfer.play();
    });
    this.wavesurfer.on('play', function(){
      let seconds = parseInt((this.wavesurfer.getDuration() % 60).toString());
      let minutes = parseInt(((this.wavesurfer.getCurrentTime() / 60) % 60).toString());
      console.log(minutes +'.'+seconds);
    });
  }
}
