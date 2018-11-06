import {Component, OnInit} from '@angular/core';
import {Message} from '../ngrx/models/message';
import {SignalRService} from '../services/SignalRService';
import {MessageRetrievalService} from '../services/messageRetrievalService';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public currentMessage: string;
  public author: string;
  public messages: Message[] = [];

  constructor(private signalrService: SignalRService, private messageRetrievalService: MessageRetrievalService) {
  }

  ngOnInit() {
    this.messageRetrievalService.getMessages().subscribe((messages: Message[]) =>
      this.messages = messages
    );

    this.signalrService.addListener('Send', (data: Message) => {
      this.messages.push(data);
    });
  }

  public sendMessage(): void {
    const message = new Message(this.author, this.currentMessage);
    this.signalrService.invoke('Send', message);
    this.currentMessage = '';
  }


  public clearMessages() {
    this.messageRetrievalService.clear();
    this.messages = [];
  }
}
