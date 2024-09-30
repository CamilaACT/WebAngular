import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResponseApi } from '../interfaces/response-api';
import { Login } from '../interfaces/login';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlApi:string=environment.apiUrl + "Usuario/"

  constructor(private http:HttpClient) { }

  IniciarSesion(request:Login):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}login`, request);
  }

  listaUsuarios(request:number):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}listaUsuarios`, request);
  }

  guardarUsuario(request:Usuario):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}registrar`, request);
  }

  editarUsuario(request:Usuario):Observable<ResponseApi>{
    return this.http.put<ResponseApi>(`${this.urlApi}editar`, request);
  }

  buscarUsuario(request:number):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}buscar`, request);
  }

  eliminarUsuario(request:number):Observable<ResponseApi>{
    return this.http.delete<ResponseApi>(`${this.urlApi}eliminar/${request}`);
  }



}
