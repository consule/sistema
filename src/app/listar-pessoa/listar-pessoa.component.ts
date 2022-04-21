import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  titulo = 'Lista de pessoas';

  pessoas = [
    {
      "nome" : "Cristiano Consule", 
      "email" : "cristiano@consule.com.br"
    }, 
    {
      "nome" : "Samuel Ferraz", 
      "email" : "samuel@consule.com.br"
    }, 
    {
      "nome" : "Leandro Cezar",
      "email" : "leandro@consule.com.br"
    }, 
    {
      "nome" : "Larissa", 
      "email" : "larissa@consule.com.br"
    }
  ]

}
