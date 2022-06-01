import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  cadastrar(usuario:Usuario):Observable <Usuario> {  /*observar a model user e reforçando para obeservar a User*/

    return this.http.post <Usuario> ('http://localhost:8080/usuarios/cadastrar', usuario)
  }
}
