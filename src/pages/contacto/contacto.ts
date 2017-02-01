import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CallNumber} from 'ionic-native';

@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html'
})
export class ContactoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

  call(numero)
  {
  	CallNumber.callNumber(numero, true)
  		.then(() => console.log('Launched dialer!'))
  		.catch(() => console.log('No se pudo realizar la llamada.'));
  }

}
