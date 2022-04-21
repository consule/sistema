import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { ExcluirPessoaComponent } from './excluir-pessoa/excluir-pessoa.component';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';

const routes: Routes = [
  {
    path: "", 
    component: ListarPessoaComponent
  }, 
  {
    path: "editar-pessoa/:id", 
    component: EditarPessoaComponent
  }, 
  {
    path: "excluir-pessoa/:id", 
    component: ExcluirPessoaComponent
  }, 
  {
    path: "inserir-pessoa", 
    component: InserirPessoaComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
