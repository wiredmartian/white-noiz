import { Injectable } from '@angular/core';
import { AudioTracks } from '../../interfaces/audio';
import WaveSurfer from 'wavesurfer.js';

@Injectable()
export class AudioProvider {
  wavesurfer: any;
  audio: AudioTracks;

  constructor() {
    this.onInitPlugin();
  }

  onInitPlugin() : void{
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
  }

  setPeaks() : void{
    this.wavesurfer.backend.peaks = [0.000, 0.000, 0.000, 0.000, 0.000, 0.000];
  }


  onPlay(track: AudioTracks, element: HTMLElement){
    if(element.classList.contains('playing')){
      this.wavesurfer.loaded = true;
      this.wavesurfer.play();
    } else {
      element.classList.add('playing');
      this.wavesurfer.empty();
      this.wavesurfer.load(track.src);
      this.onReady();
    }
  }

  onPause(){
    if(this.wavesurfer.isPlaying()){
      this.wavesurfer.pause();
    }
  }

  onPlaying(element: HTMLElement){
    this.wavesurfer.on('play', function(){
      let seconds = parseInt((this.wavesurfer.getDuration() % 60).toString());
      let minutes = parseInt(((this.wavesurfer.getCurrentTime() / 60) % 60).toString());
      if(seconds < 10){
        element.innerHTML = minutes + '.0' + seconds;
      } else {
        element.innerHTML = minutes + '.' + seconds;
      }
    });
  }

  onAudioProgress(){
    this.wavesurfer.on('audioprogress', function(){
      
    })
  }  

  onReady(){
    if(!this.wavesurfer.loaded){
      this.wavesurfer.loaded = true;
      this.wavesurfer.on('ready', function(){
        this.wavesurfer.play();
      });
    }
  }

}
