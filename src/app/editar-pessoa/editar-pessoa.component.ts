import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  pessoaEmEdicao: any;
  idPessoa: number = 0;

  constructor(private servicePessoa: PessoaService, private rotaAtiva: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {  
    this.idPessoa = this.rotaAtiva.snapshot.params['id'];
    this.getPessoaPorId(this.idPessoa);
  }

  getPessoaPorId(id: number) {
    this.servicePessoa.getPessoaPorId(id).subscribe(resultado => {
      this.pessoaEmEdicao = resultado;
    });
  }

  editar(nomecompleto: string, email: string) {

    let pessoa = {
      nome: nomecompleto, 
      email: email
    }

    this.servicePessoa.editarPessoaNoBancoDeDados(pessoa, this.idPessoa).subscribe(resultado => {
      alert("Atualizado com sucesso!");      
      this.router.navigate(["/"]);
    });
  }

}
