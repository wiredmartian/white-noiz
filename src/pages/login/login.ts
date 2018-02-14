import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, ToastController, LoadingController, MenuController } from 'ionic-angular';

import { AccountProvider } from '../../providers/account/account';
import { UserModel } from '../../models/user-model';
import { TabsPage } from '../tabs-page/tabs-page';
//import { AccountPage } from '../account/account';

//import { TabsPage } from '../tabs-page/tabs-page';
//import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserModel = { username: '', password: '', grant_type: 'password' };
  submitted = false;

  constructor(
    public navCtrl: NavController, 
    private account: AccountProvider,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController) { }

  onLogin(form: NgForm){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.submitted = true;
    if(form.valid){
      let creds = "username="+this.login.username+"&password="+this.login.password +"&grant_type=password"
      this.account.requestToken(creds)
      .subscribe(res => {
          loading.dismiss();
          this.account.login(res.userName);
          this.account.setAccessToken(res.access_token);
          //this.account.enableMenu(true);
          this.navCtrl.setRoot(TabsPage);
      }, (err) => {
          loading.dismiss();
          this.toastCtrl.create({
            message : 'Incorrect username or password. ' + err.statusText,
            duration: 3000,
            position: 'top'
          }).present();
      });
    }
  }
}
