import {Action} from '@ngrx/store';
import {Message} from '../models/message';

export const ADD_MESSAGE = '[MESSAGE] Add';
export const SEND_MESSAGE = '[MESSAGE] Send';
export const CLEAR_MESSAGE = '[MESSAGE] Clear';

export class AddMessageAction implements Action {
  readonly type = ADD_MESSAGE;

  constructor(public payload: Message[]) {
  }
}

export class SendMessageAction implements Action {
  readonly type = SEND_MESSAGE;

  constructor(public payload: Message) {
  }
}

export class ClearMessageAction implements Action {
  readonly type = CLEAR_MESSAGE;

  constructor() {
  }
}

export type MessageActions = AddMessageAction | SendMessageAction | ClearMessageAction;


