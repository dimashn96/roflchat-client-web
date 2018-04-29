import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/UserModel';

@Injectable()

export class HttpService {

  constructor(private http: HttpClient) {
  }

  addUser(user: User) {
    return this.http.put('../api/user', user);
  }

  auth(user: User) {
    return this.http.post('../api/user', user);
  }

  getUser(token: string) {
    return this.http.get('../api/user', {headers: {'x-auth': token}});
  }

}
