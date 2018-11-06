import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../ngrx/models/message';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  @Input() messages: Message[];

  constructor() {
  }

  ngOnInit() {
  }

}
