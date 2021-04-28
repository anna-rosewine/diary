import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'diary-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

  public users = 0;
  public message = '';
  public messages: string[] = [];

  constructor(private chatService: ChatService){

  }

  ngOnInit(){

    this.chatService.receiveChat().subscribe((message: string) => {
      this.messages.push(message);
    });

    this.chatService.getUsers().subscribe((users: number) => {
      this.users = users;
    });

  }

  addChat(){
    this.messages.push(this.message);
    this.chatService.sendChat(this.message);
    this.message = '';
  }
}
