import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { SubjectsPage } from '../subjects/subjects';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'registration-page',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
 
  constructor(public navCtrl: NavController) {
    
  }
login(){

    this.navCtrl.push(LoginPage);
}
gotosubject(){
   this.navCtrl.push(TabsPage);
}

}