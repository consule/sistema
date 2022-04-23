import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})
export class InserirPessoaComponent implements OnInit {

  constructor(private servicePessoa: PessoaService, private router: Router) { }

  ngOnInit(): void {
  }

  salvar(nomecompleto: string, email: string) {

    let pessoa = {
      nome: nomecompleto, 
      email: email
    }

    this.servicePessoa.salvarPessoaNoBancoDeDados(pessoa).subscribe(resultado => {
      alert("Inserido com sucesso!");   
      this.router.navigate(["/"]);

    });
  }
}
