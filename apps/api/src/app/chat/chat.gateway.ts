import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server;
  users = 0;


  async handleConnection(client: any, ...args: any[]){
    this.users++;
    this.server.emit('users', this.users)
  }

   async handleDisconnect(client: any) {
    this.users--;
     this.server.emit('users', this.users)
  }

  @SubscribeMessage('chat')
  async onChat(client, message):Promise<void> {
    client.broadcast.emit('chat', message)
  }

}
