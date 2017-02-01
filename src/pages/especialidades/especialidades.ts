import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, NavParams } from 'ionic-angular';
import { ProveedoresPage } from '../proveedores/proveedores';
import { Variables } from '../../providers/variables';


@Component({
  templateUrl: 'especialidades.html'
})
export class EspecialidadesPage {
  	tipoProveedor: any;
  	municipio : any;
  	especialidades : any;


  	constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public variables:Variables) {
	    this.tipoProveedor = navParams.get('tipoProveedor');
	    this.municipio = navParams.get('municipio');
	    var url = variables.getHost() + 'api/tipos-medicos/' + this.municipio.pais + '/' + this.municipio.departamento + '/' + this.municipio.municipio;
	    this.http.get(url).map(res => res.json()).subscribe(data => {
	        this.especialidades = data;
	    });
 	 }

	especialidadTapped(event, especialidad){

		if(this.tipoProveedor.tipoProveedor == 1){
		  	this.navCtrl.push(ProveedoresPage, {
		    	tipoProveedor: this.tipoProveedor,
		    	municipio: this.municipio,
		  		especialidad: especialidad
		    });
		}
	}


}