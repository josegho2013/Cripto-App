import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DetailComponent, HomeComponent, CardComponent],
  imports: [BrowserModule,HttpClientModule, AppRoutingModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
