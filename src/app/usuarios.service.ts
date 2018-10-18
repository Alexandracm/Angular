import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
url:string;
encabezados:any;

  constructor(private http:HttpClient) { 

  this.url="http://apidocumentospiensadigital.herokuapp.com"

   this.encabezados={header:new HttpHeaders({'content-type': Application/jason'})}
}
 iniciarSesion(usuario:any):Observable<any>{
 return this.http.post<any>(this.url+'/user_token',usuario,this.encabezados);
 }


 crearCuenta(usuario:any):Observable<any>{
 return this.http.post<any>(this.url+'/users',usuario,this.encabezados);
 }
}