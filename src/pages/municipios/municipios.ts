import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, NavParams } from 'ionic-angular';
import { EspecialidadesPage } from '../especialidades/especialidades';
import { ProveedoresPage } from '../proveedores/proveedores';
import { Variables } from '../../providers/variables';


@Component({
  templateUrl: 'municipios.html'
})
export class MunicipiosPage {
  	tipoProveedor: any;
  	departamento: any;
  	municipios : any;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public variables:Variables) {
	    this.tipoProveedor = navParams.get('tipoProveedor');
	    this.departamento = navParams.get('departamento');
	    console.log(this.departamento);

	    var url = '';
	    if(this.tipoProveedor.tipoProveedor == 1)
	    	url = variables.getHost() + 'api/municipios-medicos/' + this.departamento.pais + '/' + this.departamento.departamento;
	    else if(this.tipoProveedor.tipoProveedor == 2)
	    	url = variables.getHost() + 'api/municipios-hospitales/' + this.departamento.pais + '/' + this.departamento.departamento;
	    else if(this.tipoProveedor.tipoProveedor == 3)
	    	url = variables.getHost() + 'api/municipios-centros-diagnostico/' + this.departamento.pais + '/' + this.departamento.departamento;
	    else if(this.tipoProveedor.tipoProveedor == 4)
	    	url = variables.getHost() + 'api/municipios-laboratorios/' + this.departamento.pais + '/' + this.departamento.departamento;

	    console.log(url);

	    this.http.get(url).map(res => res.json()).subscribe(data => {
	        this.municipios = data;
	    });
 	 }

	municipioTapped(event, municipio){

		if(this.tipoProveedor.tipoProveedor == 1){
		  	this.navCtrl.push(EspecialidadesPage, {
		    	tipoProveedor: this.tipoProveedor,
		  		municipio: municipio
		    });
		}
		else{
		  	this.navCtrl.push(ProveedoresPage, {
		    	tipoProveedor: this.tipoProveedor,
		  		municipio: municipio
		    });
		}
	}


}