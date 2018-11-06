import {Actions, Effect, ofType} from '@ngrx/effects';
import {ADD_MESSAGE, AddMessageAction, MessageActions, SEND_MESSAGE, SendMessageAction} from '../actions/message.actions';
import {SignalRService} from '../../services/SignalRService';
import {map, switchMap} from 'rxjs/internal/operators';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';

@Injectable()
export class MessageEffects {
  constructor(private actions: Actions,
              private signalrService: SignalRService) {}

  @Effect({ dispatch: false })
  postMessage: Observable<Action> = this.actions.pipe(
    ofType<SendMessageAction>(SEND_MESSAGE),
    switchMap((data) => this.signalrService.invoke('Send', data.payload)));
}
