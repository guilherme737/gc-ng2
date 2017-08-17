import { Http } from '@angular/http';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MembroService {

  private BASE_API = 'http://localhost/slimrest';

  constructor(private http:Http) { }

  /*
  public inserir(membro) {
      return this.http.post(this.BASE_API + 'membro', membro).then(handleSuccess, handleError('Error creating user'));
  }

  public atualizar(membro, id) {
      return http.put(this.BASE_API + 'membro/' + id, membro).then(handleSuccess, handleError('Erro ao atualizar membro.'));        
  }

  public excluir(id) {
      return http.delete(this.BASE_API + 'membro/' + id).then(handleSuccess, handleError('Erro ao excluir membro.'));        
  }
  */

  public obterPorId(id) {
      // return this.http.get(this.BASE_API + 'membro/' + id).then(handleSuccess, handleError('Error obter membro por ID.'));
      return this.http.get(this.BASE_API + 'membro/' + id).toPromise().then(response => response.json().data).catch(this.handleError);
  }

  public obterTodos() {
      // return http.get(this.BASE_API + 'membro').then(handleSuccess, handleError('Erro ao obter Mambros'));
      return this.http.get(this.BASE_API + 'membro').toPromise().then(response => response.json().data).catch(this.handleError);
  }

  /*
  public obterFuncoes() {     
      return http.get(this.BASE_API + 'funcoes').then(handleSuccess, handleError('Erro ao obter funções.'));
  }

  public obterPastores() {     
      return http.get(this.BASE_API + 'membro-pastores').then(handleSuccess, handleError('Erro ao obter pastores.'));
  }

  public obterDiscipuladoresPorPastor(id) {     
      return http.get(this.BASE_API + 'membro-discipuladores-por-pastor/' + id).then(handleSuccess, handleError('Erro ao obter discipuladores.'));
  }

  public obterLideresPorDiscipulador(id) {     
      return http.get(this.BASE_API + 'membro-lideres-por-discipulador/' + id).then(handleSuccess, handleError('Erro ao obter líderes.'));
  }
  */

  public handleSuccess(response) {
      return response => response.json().data;
      
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
