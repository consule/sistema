import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const urlBancoDeDados = "http://localhost:3000/pessoas/";

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
    return this.http.get(`${urlBancoDeDados}`);
  }

  getPessoaPorId(id: number) : Observable<any> {
    return this.http.get(`${urlBancoDeDados}`+ id);
  }

  salvarPessoaNoBancoDeDados(pessoa: any) : Observable<any> {
    return this.http.post(`${urlBancoDeDados}`, pessoa);
  }

  editarPessoaNoBancoDeDados(pessoa: any, idPessoa: number) : Observable<any> {
    return this.http.put(`${urlBancoDeDados + idPessoa}`, pessoa);
  }

  excluirPessoa(id: number) : Observable<any> {
    return this.http.delete(`${urlBancoDeDados + id}`);
  }

}
