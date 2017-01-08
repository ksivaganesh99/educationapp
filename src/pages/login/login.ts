import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { RegistrationPage } from '../registration/registration';

import { SubjectsPage } from '../subjects/subjects';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
 
  constructor(public navCtrl: NavController) {
    
  }
gotoregister(){

  this.navCtrl.push(RegistrationPage);
}
gotosubject(){
   this.navCtrl.push(TabsPage);
}

}