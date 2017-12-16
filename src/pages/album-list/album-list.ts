import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlbumDetailPage } from '../album-detail/album-detail';
import { AlbumInterface } from '../../interfaces/album';
import { AlbumProvider } from '../../providers/album/album';


@IonicPage()
@Component({
  selector: 'page-album-list',
  templateUrl: 'album-list.html',
})
export class AlbumListPage {
  albums: AlbumInterface[];
  mediaURL: string = 'http://whitenoiz.azurewebsites.net';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provider: AlbumProvider) {
  }

  ionViewDidLoad(){
    this.getAlbums();
  }
  getAlbums(){
    this.provider.getAlbums().subscribe(response =>{
      this.albums = response;
    });
  }
  goToAlbumDetails(id){
    this.navCtrl.push(AlbumDetailPage, {
      id: id
    });
  }

}
