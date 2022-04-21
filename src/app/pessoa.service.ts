import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const servicePessoa = "http://localhost:3000/pessoas";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  // GET - BUSCA TODOS OS REGISTROS
  // GET/:ID - BUSCA POR ID DA PESSOA
  // PUT  - ATUALIZA UM REGISTRO EXISTENTE
  // POST - INSERE NOVO REGISTRO
  // DELETE - APAGA UM REGISTRO EXISTENTE


  constructor(private http: HttpClient) { }

  getTodasPessoas() : Observable<any> {
    return this.http.get(`${servicePessoa}`);
  }


}
