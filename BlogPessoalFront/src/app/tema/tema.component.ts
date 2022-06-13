import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()   /*Variavel ira receber o novo tema do tipo Tema - Lista*/
  listaTemas: Tema[]  /*Variavel para receber do service, busca em temas q estão no banco de dados - Lista */

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      // alert('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }

    this.findAllTemas() //procure todos os temas
  }

  findAllTemas() {   /*Buscas todos os temas*/
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {  /*Ira na injeção de dependencia  e transcrever de Json na variavel Tema de uma forma que o angular entenda */
      this.listaTemas = resp /*Pego e coloco na listaTemas*/
    })
  }

  cadastrar() {
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {  //Cadastra em tema e transcreve em Tema que o angular
      this.tema = resp  //Tema receba  a resposta
      alert('Tema cadastrado com sucesso!') //Alert para avisar o usuario
      this.findAllTemas() //Mostrar todos os temas
      this.tema = new Tema //Atualiza a lista de tema e deixo o tema vazio para cadastrar um novo

    })
  }
}


