import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChatPageComponent } from './components/chat-page/chat-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
     {path: '', pathMatch: 'full', component: ChatPageComponent}
    ]),
  ],
  declarations: [
    ChatPageComponent
  ],
  exports: [ChatPageComponent]
})
export class ChatUiModule {}
