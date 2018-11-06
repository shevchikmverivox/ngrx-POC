import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {Message} from '../ngrx/models/message';
import {AddMessageAction} from '../ngrx/actions/message.actions';
import {AppState} from '../ngrx/AppState';
import {Store} from '@ngrx/store';

@Injectable()
export class MessageRetrievalService {
  private url = 'http://localhost:57456/api/message';


  constructor(private httpClient: HttpClient, private store: Store<AppState>) {
  }

  public getMessages(): Observable<Message[]>{
    return this.httpClient.get<Message[]>(this.url);
  }

  public getMessagesRx(): Subscription {
    return this.httpClient.get<Message[]>(this.url).subscribe(messages => {
      this.store.dispatch(new AddMessageAction(messages));
    });
  }





  public clear(): void{
    this.httpClient.delete(this.url).subscribe((x) => x);
  }
}
