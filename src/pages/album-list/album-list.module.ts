import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumListPage } from './album-list';

@NgModule({
  declarations: [
    AlbumListPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbumListPage),
  ],
})
export class AlbumListPageModule {}
