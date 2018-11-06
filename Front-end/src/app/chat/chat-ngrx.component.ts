import {Component, OnInit} from '@angular/core';
import {Message} from '../ngrx/models/message';
import {SignalRService} from '../services/SignalRService';
import {MessageRetrievalService} from '../services/messageRetrievalService';
import {AppState} from '../ngrx/AppState';
import {Store} from '@ngrx/store';
import {AddMessageAction, ClearMessageAction, SendMessageAction} from '../ngrx/actions/message.actions';

@Component({
  selector: 'chat-ngrx',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatNgrxComponent implements OnInit {

  public currentMessage: string;
  public author: string;
  public messages: Message[] = [];

  constructor(private signalrService: SignalRService,
              private messageRetrievalService: MessageRetrievalService,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('messages').subscribe((x => {
      this.messages = x;
    }));

    this.messageRetrievalService.getMessagesRx();

    this.signalrService.addListener('Send', (data: Message) => {
      this.store.dispatch(new AddMessageAction([data]));
    });
  }

  public sendMessage(): void {
    const message = new Message(this.author, this.currentMessage);
    this.store.dispatch(new SendMessageAction(message));
    this.currentMessage = '';
  }



  public clearMessages() {
    this.store.dispatch(new ClearMessageAction());
  }
}
