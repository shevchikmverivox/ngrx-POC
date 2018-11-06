import {Message} from './models/message';

export interface AppState{
  readonly messages: Message[];
}
