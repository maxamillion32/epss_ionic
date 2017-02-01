import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, InAppBrowser } from 'ionic-native';

import { InicioPage } from '../pages/inicio/inicio';
import { RedMedicaPage } from '../pages/red-medica/red-medica';
import { MapasPage } from '../pages/mapas/mapas';
import { UbicacionPage } from '../pages/ubicacion/ubicacion';
import { ContactoPage } from '../pages/contacto/contacto';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InicioPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: InicioPage, icon: 'home' },
      { title: 'Red Médica', component: RedMedicaPage, icon: 'people' },
      { title: 'Mapas', component: MapasPage, icon: 'globe' },
      { title: 'Ubicación', component: UbicacionPage, icon: 'mail' },
      { title: 'Contacto', component: ContactoPage, icon: 'pin' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goTo()
  {
    let browser = new InAppBrowser('http://www.saludasualcance.net', '_system');
  }

}
