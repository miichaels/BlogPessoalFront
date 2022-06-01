import { Component, OnInit } from '@angular/core';
import { eventNames } from 'process';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario;
  confirmarSenha: string;
  tipoUsuario: string

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  confirmaSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUsuarioo(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    this.usuario.type = this.tipoUsuario
    if(this.usuario.senha != this.confirmarSenha) {
      alert('As senhas estão diferentes')
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        alert ('Usuario cadastrado com sucesso')
      })
    }
  }

}
