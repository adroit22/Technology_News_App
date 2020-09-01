import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public viewCtrl: ModalController, navParams: NavParams) { }

  ngOnInit() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
