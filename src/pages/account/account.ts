import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  username: string;
  picture: string;

  constructor(
    public alertCtrl: AlertController, 
    public nav: NavController, 
    public accProvider: AccountProvider) {

  }

  ionViewDidEnter(){
    this.accProvider.hasLoggedIn().then(IsLoggedIn =>{
      if(IsLoggedIn){
        this.getProfilePicture();
      } else{
        this.nav.push(LoginPage);
      }
    });
  }
  updatePicture() {
    console.log('Clicked to update picture');
  }
  getProfilePicture(){
    if(this.accProvider.hasLoggedIn()){
      this.accProvider.getUsername().then(username =>{
        this.username = username;
        this.accProvider.getUserPicture(username).subscribe(res =>{
          this.picture = 'http://whitenoiz.azurewebsites.net/uploads/images/' + res;
        })
      })
    }
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  changeUsername() {
    let alert = this.alertCtrl.create({
      title: 'Change Username',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'username',
      value: this.username,
      placeholder: 'username'
    });
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        this.accProvider.setUsername(data.username);
        this.getUsername();
      }
    });

    alert.present();
  }

  getUsername() {
    this.accProvider.getUsername().then((username) => {
      this.username = username;
    });
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.accProvider.logout();
    this.nav.setRoot('LoginPage');
  }

  support() {
    this.nav.push('SupportPage');
  }
}
