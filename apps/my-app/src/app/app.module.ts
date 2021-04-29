import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthFeatureModule } from '@auth/feature';
import { AuthUiModule } from '@auth/ui';
import { SharedUiModule } from '@shared/ui';
import { RouterModule } from '@angular/router';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3333/', options: {}};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthFeatureModule,
    AuthUiModule,
    SharedUiModule,
    RouterModule.forRoot([
      {
        path: 'chat-ui',
        loadChildren: () =>
          import('@diary/chat').then((module) => module.ChatUiModule),
      },
      {
        path: 'shared-ui',
        loadChildren: () => import('@shared/ui').then((m) => m.SharedUiModule),
      },

      {
        path: '',
        redirectTo: 'chat-ui',
        pathMatch: 'full',
      },
    ]),
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
