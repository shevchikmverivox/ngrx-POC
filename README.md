# ngrx-POC

contains back-end and front-end implementation of SignalR chat.

Front-end uses two approaches to handle data: regular service-based approach, and NGRX.

Installation:
1. clone repository
2. Build and run backend project in visual studio
3. 
``` 
cd Front-end
npm install
ng serve
```
This should open your browser with the following url: http://localhost:4200

Description:
Main window will contain two chats: one on the left and one on the right.
Left one uses angular service approach to handle data. The right one uses NGRX.
Both of the chats are "connected" via SignalR, so any message sent to any of the chats will appear in another one (also works for chats opened in different tabs, browsers, or PCs)
   


