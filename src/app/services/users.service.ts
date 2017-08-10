import { Users } from './../model/users';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl = 'http://localhost:8080/prototipows/rest/users';

  constructor(private http: Http) {}

  getAll(): Promise<Users[]>{
    return this.http.get(this.baseUrl).toPromise().then(response => response.json() as Users[]).catch(this.handlerError);
  }

  save(user: Users): Promise<Users> {
    return this.http.post(this.baseUrl, JSON.stringify(user), {
      headers: this.headers
    }).toPromise().then(res => res.json() as Users).catch(this.handlerError);
  }


  private handlerError(error: any){
    return Promise.reject(error.message || error);
  }

}
