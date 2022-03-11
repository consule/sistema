import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoAdicionarComponent } from './botao-adicionar.component';

@NgModule({
  declarations: [
    BotaoAdicionarComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    BotaoAdicionarComponent
  ]
})
export class BotaoAdicionarModule { }
