import {Message} from '../models/message';
import {ADD_MESSAGE, CLEAR_MESSAGE, MessageActions,} from '../actions/message.actions';

const initialState: Message[] = [];

export function messages_reducer(state: Message[] = initialState, action: MessageActions) {

  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, ...action.payload];
    case CLEAR_MESSAGE:
      return [];
    default:
      return state;
  }
}
