import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { RadAudioApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { SupportPage } from '../pages/support/support';

import { UserData } from '../providers/user-data';
import { AlbumProvider } from '../providers/album/album';
import { TrackProvider } from '../providers/track/track';
import { ArtistProvider } from '../providers/artist/artist';
import { AccountProvider } from '../providers/account/account';
import { ApiProvider } from '../providers/api/api';

import { HomePage } from '../pages/home/home';
import { AlbumListPage } from '../pages/album-list/album-list';
import { AlbumDetailPage } from '../pages/album-detail/album-detail';
import { TrackListPage } from '../pages/track-list/track-list';
import { TrackDetailPage } from '../pages/track-detail/track-detail';
import { ArtistDetailPage } from '../pages/artist-detail/artist-detail';
import { AudioProvider } from '../providers/audio/audio';
import { ChartsProvider } from '../providers/charts/charts';
import { ChartsPage } from '../pages/charts/charts';
import { SettingsPage } from '../pages/settings/settings';


@NgModule({
  declarations: [
    RadAudioApp,
    AboutPage,
    AccountPage,
    LoginPage,
    SignupPage,
    TabsPage,
    SupportPage,

    AlbumListPage,
    AlbumDetailPage,
    TrackListPage,
    TrackDetailPage,
    ArtistDetailPage,
    HomePage,
    SettingsPage,
    ChartsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(RadAudioApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    RadAudioApp,
    AboutPage,
    AccountPage,
    LoginPage,
    SignupPage,
    TabsPage,
    SupportPage,

    AlbumListPage,
    AlbumDetailPage,
    TrackListPage,
    TrackDetailPage,
    ArtistDetailPage,
    HomePage,
    SettingsPage,
    ChartsPage

  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserData,
    InAppBrowser,
    SplashScreen,
    AlbumProvider,
    TrackProvider,
    ArtistProvider,
    AccountProvider,
    ApiProvider,
    AudioProvider,
    ChartsProvider
  ]
})
export class AppModule { }
