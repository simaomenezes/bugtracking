import { Tproform } from './../model/tproform';
import { Products } from './../model/products';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  private headers = new Headers({'Content-Type': 'application/json'});
  private productsUrl = 'http://localhost:8080/prototipows/rest/products';

  getProductsAll(): Promise<Products[]> { 
    return this.http.get(this.productsUrl).toPromise().then(response => response.json() as Products[]).catch(this.handleError);
  }

  createProduct(product: Products): Promise<Products> {
    return this.http.post(this.productsUrl + '/createProduct', 
    JSON.stringify(product), 
    {
      headers: this.headers
    }).toPromise().then(res => res.json() as Products).catch(this.handleError);
  }

  getProductByIdTest(id: number): Promise<Products> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get(url).toPromise().then(resp => resp.json() as Products).catch(this.handleError);
  }

  findByCdFormCdUsuarioNuAtendimento(cdFormulario: string, cdUsuario: string, nuAtendimento: number): Promise<Tproform> {
    const url = `${this.productsUrl}/${cdFormulario}/${cdUsuario}/${nuAtendimento}`;
    return this.http.get(url).toPromise().then(resp => resp.json() as Tproform).catch(this.handleError);
  }

  private Data(res: Response) {
    return res.json();
  }
  private extractData(res: Response) {
    let body = res.json();
        return body;
    }

  private handleError(error: any): Promise<any> {
    console.log("An error occurred: " + error);
    return Promise.reject(error.message || error);
  }
}
