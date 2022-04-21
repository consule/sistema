import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  titulo = 'Lista de pessoas';

  pessoas = [
    {
      "nome" : "Cristiano Consule", 
      "email" : "cristiano@consule.com.br"
    }, 
    {
      "nome" : "Samuel Ferraz", 
      "email" : "samuel@consule.com.br"
    }, 
    {
      "nome" : "Leandro Cezar",
      "email" : "leandro@consule.com.br"
    }, 
    {
      "nome" : "Larissa", 
      "email" : "larissa@consule.com.br"
    }
  ]
}
