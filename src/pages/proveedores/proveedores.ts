import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, NavParams } from 'ionic-angular';
import { Variables } from '../../providers/variables';


@Component({
  templateUrl: 'proveedores.html'
})
export class ProveedoresPage {
  	tipoProveedor: any;
  	municipio: any;
  	proveedores : any;
  	especialidad: any;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public variables:Variables) {
	    this.tipoProveedor = navParams.get('tipoProveedor');
	    this.municipio = navParams.get('municipio');
	    this.especialidad = navParams.get('especialidad');
	    console.log(this.tipoProveedor);

	   	var url = '';
	   	if(this.tipoProveedor.tipoProveedor == 1){
	    	url = variables.getHost() + 'api/medicos/' + this.municipio.pais + '/' + this.municipio.departamento + '/' + this.municipio.municipio + '/' + this.especialidad.id;
	    	this.http.get(url).map(res => res.json()).subscribe(data => {
		        this.proveedores = data.medicos;
		    });
	   	}
	    else if(this.tipoProveedor.tipoProveedor == 2){
	    	url = variables.getHost() + 'api/hospitales/' + this.municipio.pais + '/' + this.municipio.departamento + '/' + this.municipio.municipio;
	    	this.http.get(url).map(res => res.json()).subscribe(data => {
		        this.proveedores = data;
		    });
	    }
	    else if(this.tipoProveedor.tipoProveedor == 3){
	    	url = variables.getHost() + 'api/centros-diagnostico/' + this.municipio.pais + '/' + this.municipio.departamento + '/' + this.municipio.municipio;
	    	this.http.get(url).map(res => res.json()).subscribe(data => {
		        this.proveedores = data;
		    });
	    }
	    else if(this.tipoProveedor.tipoProveedor == 4){
	    	url = variables.getHost() + 'api/laboratorios/' + this.municipio.pais + '/' + this.municipio.departamento + '/' + this.municipio.municipio;
	    	this.http.get(url).map(res => res.json()).subscribe(data => {
		        this.proveedores = data;
		    });
	    }
	    console.log('url: ' + url);
	    
 	 }


}