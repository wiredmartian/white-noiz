import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumDetailPage } from './album-detail';

@NgModule({
  declarations: [
    AlbumDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbumDetailPage),
  ],
})
export class AlbumDetailPageModule {}
