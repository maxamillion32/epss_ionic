import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DepartamentosPage } from '../departamentos/departamentos';
import { ClinicaPage } from '../clinica/clinica';


@Component({
  selector: 'page-red-medica',
  templateUrl: 'red-medica.html'
})

export class RedMedicaPage {
	
	items: Array<{title: string, imagen: string, tipoProveedor: string}>;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.items = [];
    	this.items.push({
        	title: 'MÉDICOS',
        	imagen: 'medicos.jpg',
        	tipoProveedor: '1'
      	});
      	this.items.push({
        	title: 'HOSPITALES',
        	imagen: 'hospitales.jpg',
        	tipoProveedor: '2'
      	});
      	this.items.push({
        	title: 'CENTROS DE DIAGNÓSTICO',
        	imagen: 'centros.jpg',
        	tipoProveedor: '3'
      	});
      	this.items.push({
        	title: 'LABORATORIOS',
        	imagen: 'laboratorios.jpg',
        	tipoProveedor: '4'
      	});
  	}

  	ir(event, item) {
    	this.navCtrl.push(DepartamentosPage, {
      		item: item
    	});
  	}

    irClinica(event) {
      this.navCtrl.push(ClinicaPage, { });
    }

  	itemTapped(event, item) {
    	this.navCtrl.push(DepartamentosPage, {
      		item: item
    	});
  	}



}
