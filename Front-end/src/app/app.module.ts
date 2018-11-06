import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChatComponent} from './chat/chat.component';
import {ChatWindowComponent} from './chat-window/chat-window.component';
import {FormsModule} from '@angular/forms';
import {SignalRService} from './services/SignalRService';
import {HttpClientModule} from '@angular/common/http';
import {MessageRetrievalService} from './services/messageRetrievalService';
import {StoreModule} from '@ngrx/store';
import {messages_reducer} from './ngrx/reducers/message.reducer';
import {ChatNgrxComponent} from './chat/chat-ngrx.component';
import {EffectsModule} from '@ngrx/effects';
import {MessageEffects} from './ngrx/effects/message.effects';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatNgrxComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      messages: messages_reducer
    }),
    EffectsModule.forRoot([
      MessageEffects
    ]),
  ],
  providers: [
    SignalRService,
    MessageRetrievalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
