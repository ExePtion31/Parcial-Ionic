import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(
    public NavCtrl: NavController
  ) { }

  primerapag(){
    this.NavCtrl.navigateForward(`/home`);
  }

  tercerapag(){
    this.NavCtrl.navigateForward(`/page3`);
  }

  ngOnInit() {
  }
   Frameworks: Array<any>=[{Numero: "1.", Titulo:"React Native"},
                           {Numero: "2.", Titulo:"Xamarin"},
                           {Numero: "3.", Titulo:"PhoneGap"},
                           {Numero: "4.", Titulo:"Native Script"},
                           {Numero: "5.", Titulo:"Appcelerator Titanium"}]
}
