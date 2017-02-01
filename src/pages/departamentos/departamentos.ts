import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, NavParams } from 'ionic-angular';
import { MunicipiosPage } from '../municipios/municipios';
import { Variables } from '../../providers/variables';


@Component({
  templateUrl: 'departamentos.html'
})
export class DepartamentosPage {
  	tipoProveedor: any;
  	departamentos : any;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public variables:Variables) {
	    this.tipoProveedor = navParams.get('item');

	    var url = variables.getHost() + 'api/departamentos/1';

	    this.http.get(url).map(res => res.json()).subscribe(data => {
	        this.departamentos = data;
	    });
 	 }

	departamentoTapped(event, departamento){

		this.navCtrl.push(MunicipiosPage, {
		  	tipoProveedor: this.tipoProveedor,
			departamento: departamento
		});
		
	}


}