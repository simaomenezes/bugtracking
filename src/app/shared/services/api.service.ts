import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  //setando configurações para o tipo de envio dos dados.
  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type':'application/json',
      'Accept':'application/json'
    }

    return new Headers(headersConfig);
  }

  //metodo para axilio de tratamento de mensagem de erro
  private formatErros(error: any){
    return Observable.throw(error.json());
  }

  //criaremos aqui os metodos de CRUD, faram referencia aos metodos do nosso service, HTTP Methods
  /**
   * 
   * @param pathResource 
   * caminho referente a url da api rest de aplicações de terceiros
   * @param params 
   * rece os parametros para filtro e pesquisa
   */
  get(pathResource: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${pathResource}`, 
    {
      headers: this.setHeaders(), search: params
    }).catch(this.formatErros).map((res: Response) => res.json());
  }

  /**
   * 
   * @param pathResource 
   * caminho referente a url da api rest de aplicações de terceiros
   * @param body 
   * Dados com o corpo da requisição que sera enviada para o servidor
   */
  post(pathResource: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.api_url}${pathResource}`, 
      JSON.stringify(body),
      {
        headers: this.setHeaders()
      }
    ).catch(this.formatErros).map((res: Response) => res.json());
  }

  /**
   * 
   * @param pathResource 
   * caminho referente a url da api rest de aplicações de terceiros
   * @param body 
   * Dados com o corpo da requisição que sera enviada para o servidor
   */
  put(pathResource: string, body: Object = {}):Observable<any> {
    return this.http.put(`${environment}${pathResource}`, 
    JSON.stringify(body),
    {
      headers: this.setHeaders()
    }).catch(this.formatErros).map((res: Response) => res.json());
  }

  /**
   * 
   * @param pathResource 
   * caminho referente a url da api rest de aplicações de terceiros
   */
  delete(pathResource: string): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${pathResource}`,
      {
        headers: this.setHeaders()
      }
    ).catch(this.formatErros).map((res: Response) => res.json());

  }

}
