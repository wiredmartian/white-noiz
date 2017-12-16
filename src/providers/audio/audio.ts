import { Injectable } from '@angular/core';
import { AudioTrack } from '../../interfaces/audio';
import WaveSurfer from 'wavesurfer.js';

@Injectable()
export class AudioProvider {
  wavesurfer: WaveSurfer;
  audio: AudioTrack;
  mediaURL: string = 'http://whitenoiz.azurewebsites.net';
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

  constructor() {
    this.wavesurfer = new WaveSurfer.create(this.params);
  }

  setPeaks() : void{
    this.wavesurfer.backend.peaks = [0.000, 0.000, 0.000, 0.000, 0.000, 0.000];
  }

  initAudio(track: AudioTrack, e: HTMLElement): void{
    /*console.log(e);
    for(let i = 0; i <= document.childElementCount; i++){
      if(document.children.item(i).classList.contains('active')){
        document.children.item(i).classList.remove('active');
      }
    }*/
    e.classList.add('active');
    this.wavesurfer.empty();
    /**see attributes */

    console.log(track);
  }
  Play(track: AudioTrack, e: HTMLElement){
    this.wavesurfer.backend.peaks = [0.000, 0.000, 0.000, 0.000, 0.000, 0.000];
    if(e.classList.contains('active')){
      this.wavesurfer.play();
    } else {

      if(this.wavesurfer.isPlaying()){
        this.wavesurfer.pause();
      }
      this.wavesurfer.empty();
      this.initAudio(track, e);
      this.wavesurfer.load(this.mediaURL + track.src, this.wavesurfer.backend.peaks);
      this.Ready();
      console.log(this.GetDuration());
      this.AudioProgress();
    }
  }

  Ready() : void {
    this.wavesurfer.on('ready', () =>{
      this.wavesurfer.play();
    });
  }
  Pause() : void {
    if(this.wavesurfer.isPlaying()){
      this.wavesurfer.pause();
    }
  }
  GetDuration() : string {
    this.wavesurfer.on('play', () =>{
      let seconds = parseInt((this.wavesurfer.backend.getDuration() % 60).toString());
      let minutes = parseInt(((this.wavesurfer.backend.getDuration() / 60) % 60).toString());
      return (minutes + '.' + seconds);
    });
    return '0.00';
  }

  AudioProgress(){
    this.wavesurfer.on('audioprogress', () =>{
      let secs = parseInt((this.wavesurfer.getCurrentTime() % 60).toString());
      let mins = parseInt(((this.wavesurfer.getCurrentTime() / 60) % 60).toString());
      if(secs < 10){
        console.log(mins + '.' + '0' + secs)
      } else {
        console.log(mins + '.' + secs);
      }
    });
  }  
}
