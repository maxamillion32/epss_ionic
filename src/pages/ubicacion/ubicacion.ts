import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-ubicacion',
  templateUrl: 'ubicacion.html'
})
export class UbicacionPage {

	tipoProveedor: any;
	km: string = "10";
	items: Array<{title: string, imagen: string, tipoProveedor: string}>;

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.tipoProveedor = "1";
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

  	buscar(event){

  		var tipoProveedor:any;
  		this.items.forEach((proveedor,index)=>{
  			if(proveedor.tipoProveedor == this.tipoProveedor){
  				tipoProveedor = proveedor;
  			}
  		})

  		this.navCtrl.push(MapPage, {
      		tipoProveedor: tipoProveedor,
      		km: this.km,
      		porDistancia: true
    	});
  	}

}
