import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-excluir-pessoa',
  templateUrl: './excluir-pessoa.component.html',
  styleUrls: ['./excluir-pessoa.component.css']
})
export class ExcluirPessoaComponent implements OnInit {

  idPessoa: number = 0;
  pessoaSelecionada: any;

  constructor(private pessoaService: PessoaService, private rotaAtiva: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getPessoaPorId();
    
  }

  getPessoaPorId() {
    this.idPessoa = this.rotaAtiva.snapshot.params['id'];
    this.pessoaService.getPessoaPorId(this.idPessoa).subscribe(resultado => {
      this.pessoaSelecionada = resultado;
    });
  }

  excluir() {
    this.idPessoa = this.rotaAtiva.snapshot.params['id'];
    this.pessoaService.excluirPessoa(this.idPessoa).subscribe(resultado => {
      alert('Excluído com sucesso');
      this.router.navigate(['/']);
    });
  }

}
