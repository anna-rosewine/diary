import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthFeatureModule } from '@auth/feature';
import { AuthUiModule } from '@auth/ui';
import { SharedUiModule } from '@shared/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthFeatureModule,
    AuthUiModule,
    SharedUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
