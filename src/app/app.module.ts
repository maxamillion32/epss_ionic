import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { RedMedicaPage } from '../pages/red-medica/red-medica';
import { ClinicaPage } from '../pages/clinica/clinica';
import { DepartamentosPage } from '../pages/departamentos/departamentos';
import { MunicipiosPage } from '../pages/municipios/municipios';
import { EspecialidadesPage } from '../pages/especialidades/especialidades';
import { ProveedoresPage } from '../pages/proveedores/proveedores';
import { MapasPage } from '../pages/mapas/mapas';
import { MapPage } from '../pages/map/map';
import { UbicacionPage } from '../pages/ubicacion/ubicacion';
import { ContactoPage } from '../pages/contacto/contacto';

import { Variables } from '../providers/variables';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    RedMedicaPage,
    ClinicaPage,
    DepartamentosPage,
    MunicipiosPage,
    EspecialidadesPage,
    ProveedoresPage,
    MapasPage,
    MapPage,
    UbicacionPage,
    ContactoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    RedMedicaPage,
    ClinicaPage,
    DepartamentosPage,
    MunicipiosPage,
    EspecialidadesPage,
    ProveedoresPage,
    MapasPage,
    MapPage,
    UbicacionPage,
    ContactoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Variables]
})
export class AppModule {}
