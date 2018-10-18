import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../usuarios.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
 
 formulario:any;

  constructor(private servicioUsuarios:UsuariosService) { 
  this.formulario={
  auth: {
     email:"",
     password:""
     }
   }
  }
  ngOnInit() {
  }

iniciarSesion(){
	this.servicioUsuarios.IniciarSesion
	(this.formulario).subscribe(respuesta=>{localStorage.setItem('sessionToken', respuesta.jwt); 
	this.router.navigate(['/articulos']);
	alert("inicio de sesion exitoso");
	},error=>{
    alert("Fallo en el inicio de sesión, verifique la consola");
    console.log(error);

	});
  }
}
