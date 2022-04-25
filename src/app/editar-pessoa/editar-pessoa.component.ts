import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  formulario: FormGroup | any;

  constructor(private servicePessoa: PessoaService, private rotaAtiva: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {  
    this.idPessoa = this.rotaAtiva.snapshot.params['id'];
    this.getPessoaPorId(this.idPessoa);

    this.formulario = this.formBuilder.group({
      nomecompleto : [
        '', 
        Validators.compose([
          Validators.required, 
          Validators.minLength(5)
        ])
      ], 
      email : [
        '',
        Validators.compose([
          Validators.required, 
          Validators.email
        ])        
      ]
    });

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
