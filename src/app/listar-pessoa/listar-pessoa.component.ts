import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  pessoas: any;
  titulo = 'Lista de pessoas';

  constructor(private servicePessoa: PessoaService) { }

  ngOnInit(): void {
    this.getTodosRegistros();
  }

  getTodosRegistros() {
    this.servicePessoa.getTodasPessoas().subscribe(resultado => {
      this.pessoas = resultado;
    });
  }

  
}
