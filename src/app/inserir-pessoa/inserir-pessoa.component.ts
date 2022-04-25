import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})
export class InserirPessoaComponent implements OnInit {

  formulario: FormGroup | any;

  constructor(private servicePessoa: PessoaService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
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
