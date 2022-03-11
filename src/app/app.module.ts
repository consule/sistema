import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BotaoAdicionarModule } from 'projects/layout/src/lib/botao-adicionar/botao-adicionar.module';
import { IconeEditarModule, IconeVisualizarModule, LayoutModule } from 'projects/layout/src/public-api';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule, 
    LayoutModule, 
    BotaoAdicionarModule, 
    IconeEditarModule, 
    IconeVisualizarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
