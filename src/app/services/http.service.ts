import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/UserModel';
import {Conversation} from "../models/ConversationModel";

@Injectable()

export class HttpService {

  constructor(private http: HttpClient) {
  }

  addUser(user: User) {
    return this.http.put('http://localhost:3000/api/user', user);
  }

  auth(user: User) {
    return this.http.post('http://localhost:3000/api/user', user);
  }

  getUser(token: string) {
    return this.http.get('http://localhost:3000/api/user', {headers: {'x-auth': token}});
  }

  addConversation(conversation: Conversation, token: string) {
    return this.http.put('http://localhost:3000/api/conversation', conversation,{headers: {'x-auth': token}});
  }

}
