import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthFeatureModule } from '@auth/feature';
import { AuthUiModule } from '@auth/ui';
import { SharedUiModule } from '@shared/ui';
import { RouterModule } from '@angular/router';

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
        path: 'shared-ui',
        loadChildren: () => import('@shared/ui').then((m) => m.SharedUiModule),
      },
      {
        path: '',
        redirectTo: 'shared-ui',
        pathMatch: 'full'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
