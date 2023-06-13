import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './modules/public/public.component';
import { PrivateComponent } from './modules/private/private.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PublicComponent, PrivateComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
