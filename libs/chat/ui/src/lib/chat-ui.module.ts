import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { ChatService } from './components/chat-page/chat.service';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { FormsModule } from '@angular/forms';
const config: SocketIoConfig = { url: 'http://localhost:3333/', options: {}};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ChatPageComponent }
    ]),
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  declarations: [
    ChatPageComponent
  ],
  exports: [ChatPageComponent],
  providers: [ChatService]
})
export class ChatUiModule {}
