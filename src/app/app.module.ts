import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from'@angular/router';
import {HttpClientModule} from'@angular/common/http';
import {FormsModule} from @angular/forms';

import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { MostrarArticuloComponent } from './mostrar-articulo/mostrar-articulo.component';


import{ArticulosService} from './articulos.service';
import{UsuariosService} from './usuarios.service';

import { from } from 'rxjs';


const rutas:Routes=[
{path:'',component:InicioComponent, pathMatch:'full'},//ruta vacia
{path:'inicio', component:InicioComponent},
{path:'articulos', component:ArticulosComponent},
{path: '**', redirectTo: '/', pathMatch: 'full'}//Ruta que no existe
];

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    InicioComponent,
    ArticulosComponent,
    CrearArticuloComponent,
    IniciarSesionComponent,
    CrearCuentaComponent,
    MostrarArticuloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
