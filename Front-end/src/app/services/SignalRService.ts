import {Injectable} from '@angular/core';
import {HubConnection, HubConnectionBuilder, LogLevel} from '@aspnet/signalr';
import {from, Observable, of} from 'rxjs';

@Injectable()
export class SignalRService {
  private _hubConnection: HubConnection | undefined;

  constructor() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl('http://localhost:57456/notify')
      .configureLogging(LogLevel.Information)
      .build();

    this._hubConnection.start().catch(err => console.error(err.toString()));
  }

  public addListener(methodName: string, callback: (data: any) => void): void {
    this._hubConnection.on(methodName, callback);
  }

  public invoke(methodName: string, data: any): Observable<any> {
    if (this._hubConnection) {
      return from(this._hubConnection.invoke(methodName, data));
    }

    return of();
  }


}
