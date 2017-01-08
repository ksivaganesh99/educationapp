import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'subjects-page',
  templateUrl: 'subjects.html'
})
export class SubjectsPage {
 items = ["Mathmatics","Science","Previous Questions","Concepts"];
  constructor(public navCtrl: NavController) {
    
  }
login(){

    this.navCtrl.push(LoginPage);
}

}