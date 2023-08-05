import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponentComponent } from './news-component/news-component.component';
import { NewsCardComponentComponent } from './news-component/news-card-component/news-card-component.component';

import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NewsComponentComponent,
    NewsCardComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
