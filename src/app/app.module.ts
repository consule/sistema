import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BotaoAdicionarModule } from 'projects/layout/src/lib/botao-adicionar/botao-adicionar.module';
import { IconeEditarModule, IconeExcluirModule, IconeVisualizarModule, LayoutModule } from 'projects/layout/src/public-api';

import { AppComponent } from './app.component';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { ExcluirPessoaComponent } from './excluir-pessoa/excluir-pessoa.component';
import { AppRoutingModule } from './app-routing.module';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListarPessoaComponent,
    EditarPessoaComponent,
    ExcluirPessoaComponent,
    InserirPessoaComponent,

  ],
  imports: [
    BrowserModule, 
    LayoutModule, 
    BotaoAdicionarModule, 
    IconeEditarModule, 
    IconeVisualizarModule, 
    IconeExcluirModule, AppRoutingModule, 
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
