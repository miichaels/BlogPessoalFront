import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
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
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
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
      this.alertas.showAlertSuccess('As senhas estão diferentes')
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/entrar'])
        this.alertas.showAlertSuccess('Usuario cadastrado com sucesso!')
      })
    }
  }

}
