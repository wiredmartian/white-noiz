import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtistDetailPage } from './artist-detail';

@NgModule({
  declarations: [
    ArtistDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtistDetailPage),
  ],
})
export class ArtistDetailPageModule {}
