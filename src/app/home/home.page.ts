import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public NavCtrl: NavController
  ) {}

  segundapag(){
   this.NavCtrl.navigateForward(`/page2`);
  }

  tercerapag(){
    this.NavCtrl.navigateForward(`/page3`);
  }
}
