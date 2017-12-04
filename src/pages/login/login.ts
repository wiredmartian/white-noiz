import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, ToastController } from 'ionic-angular';

import { AccountProvider } from '../../providers/account/account';
import { UserModel } from '../../models/user-model';
//import { TabsPage } from '../tabs-page/tabs-page';
import { AccountPage } from '../account/account';

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
    public toastCtrl: ToastController) { }

  onLogin(form: NgForm){
    this.submitted = true;
    if(form.valid){
      let creds = "username="+this.login.username+"&password="+this.login.password +"&grant_type=password"
      this.account.requestToken(creds)
      .subscribe(res => {
          this.account.login(res.userName);
          this.account.setAccessToken(res.access_token);
          this.navCtrl.push(AccountPage);
      }, (err) => {
          this.toastCtrl.create({
            message : 'Incorrect username or password. ' + err.statusText,
            duration: 3000,
            position: 'top'
          }).present();
      });
    }
  }
}
