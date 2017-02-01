import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {CallNumber, AppAvailability, Device} from 'ionic-native';


@Component({
  selector: 'page-clinica',
  templateUrl: 'clinica.html'
})
export class ClinicaPage {

	wazeInstalado:any;
	isIOS:any;
	isAndroid:any;
	schemeWaze: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {}

  	ionViewDidLoad() {
    	this.checkWaze();
  	}

  	call(numero)
  	{
	  	CallNumber.callNumber(numero, true)
	  		.then(() => console.log('Launched dialer!'))
	  		.catch(() => console.log('No se pudo realizar la llamada.'));
  	}

  	checkWaze()
  	{
  		this.isIOS = this.platform.is('ios');
  		if(this.isIOS) this.schemeWaze = 'waze://';

  		this.isAndroid = this.platform.is('android');
  		if(this.isAndroid) this.schemeWaze = 'com.waze';

  		if(this.isIOS || this.isAndroid)
  		{
        this.wazeInstalado = AppAvailability.check(this.schemeWaze)
			  .then(
				  (yes: boolean) => true,
				  (no: boolean) => false
			  );
  		}

  	}

  	goWaze(latitud, longitud)
  	{
      	window.open('waze://?ll='+latitud+', '+longitud+'&navigate=yes', '_system', 'location=no');
  	}

  	descargarWaze()
    {
        var linkIOS = "https://itunes.apple.com/us/app/waze-social-gps-traffic/id323229106?mt=8";
        var linkAnd = "https://play.google.com/store/apps/details?id=com.waze&referrer=utm_source%3Dgmm%26utm_campaign%3Dgmm_android";
        if(this.isIOS) {
            window.open(linkIOS, '_system', 'location=no');     
        }
        else if(this.isAndroid) {
            window.open(linkAnd, '_system', 'location=no');
        }
        else{
            window.open(linkAnd, '_system', 'location=no');
        }
        
    }

}
