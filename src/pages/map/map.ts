import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import { Variables } from '../../providers/variables';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  

  @ViewChild('map') mapElement: ElementRef;
 
  map: any;
  mapInitialised: boolean = false;
  apiKey: any;
  tipoProveedor: any;
  km: any;
  porDistancia: any;
  proveedores: any;
  url: any;
  zoom: any;
 
  constructor(private nav: NavController, public navParams: NavParams, public http:Http, public variables:Variables) {

    this.apiKey = 'AIzaSyBX4LERcigN1XJc17J8xtOH629sonJrJQs';

    this.tipoProveedor = navParams.get('tipoProveedor');
    this.porDistancia = navParams.get('porDistancia');
    if(this.tipoProveedor.tipoProveedor == 0){ this.zoom = 18; }
    else { this.zoom = 7; }
    this.km = 0;
    if(this.porDistancia){
      this.zoom = 13;
      this.km = navParams.get('km');
    }
    

    
    if(this.tipoProveedor.tipoProveedor == 1)
      this.url = variables.getHost() + 'api/medicos/1';
    else if(this.tipoProveedor.tipoProveedor == 2)
      this.url = variables.getHost() + 'api/hospitales/1';
    else if(this.tipoProveedor.tipoProveedor == 3)
      this.url = variables.getHost() + 'api/centros-diagnostico/1';
    else if(this.tipoProveedor.tipoProveedor == 4)
      this.url = variables.getHost() + 'api/laboratorios/1';

    this.loadGoogleMaps();

  }

  obtenerProveedores(currentPosition){
    if(this.tipoProveedor.tipoProveedor == 0){
      var proveedor = {icono:"doctor.png",latitud:"14.6019881",longitud:"-90.5243813"};
      this.addProveedorMarker(proveedor);
      this.setCenter(14.6019881,-90.5243813);
    }
    else{
      this.http.get(this.url).map(res => res.json()).subscribe(data => {
          this.proveedores = data;
          console.log(this.proveedores);

          this.proveedores.forEach((proveedor, index) => {
            

            if(this.porDistancia){
              var position = new google.maps.LatLng(parseFloat(proveedor.latitud), parseFloat(proveedor.longitud));
              var cpos = google.maps.geometry.spherical.computeDistanceBetween(position, currentPosition);
              if(cpos < this.km*1000)
                this.addProveedorMarker(proveedor);
            }
            else{
              this.addProveedorMarker(proveedor);
            }

          })

      });
    }
  }

  loadGoogleMaps(){

    if(typeof google == "undefined" || typeof google.maps == "undefined"){
 
      console.log("Google maps JavaScript needs to be loaded.");
      this.disableMap();

      //Load the SDK
      window['mapInit'] = () => {
        this.initMap();
        this.enableMap();
      }
 
      let script = document.createElement("script");
      script.id = "googleMaps";
      
      if(this.apiKey){
        script.src = 'http://maps.google.com/maps/api/js?libraries=geometry&key=' + this.apiKey + '&callback=mapInit';
      } else {
        script.src = 'http://maps.google.com/maps/api/js?libraries=geometry&callback=mapInit';       
      }
 
      document.body.appendChild(script);

    }
    else {
          console.log("showing map");
          this.initMap();
          this.enableMap();  
    }

  }

  initMap(){
  console.log('init map');
    this.mapInitialised = true;
 
    Geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
          center: latLng,
          zoom: this.zoom,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.addMarker(latLng);
      this.drawCircle(latLng, this.km*1000);

      this.obtenerProveedores(latLng);
 
    });
 
  }

  disableMap(){
    console.log("disable map");
  }
 
  enableMap(){
    console.log("enable map");
  }

  addMarker(position)
  {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: position,
    });
  }

  drawCircle(position, radius){
    var cityCircle = new google.maps.Circle({
      strokeColor: '#021321',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#021321',
      fillOpacity: 0.35,
      map: this.map,
      center: position,
      radius: radius
    });
  }

  addProveedorMarker(proveedor){
    var position = {lat: parseFloat(proveedor.latitud), lng: parseFloat(proveedor.longitud)};

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: position,
      icon: "assets/images/" + proveedor.icono
    });
  }

  setCenter(longitud, latitud)
  {
    this.map.setCenter(new google.maps.LatLng(longitud,latitud));
  }

}
