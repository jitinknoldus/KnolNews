import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponentComponent } from './news-component/news-component.component';
import { NewsCardComponentComponent } from './news-component/news-card-component/news-card-component.component';
import {HttpClientModule} from "@angular/common/http";
import { TwiWayBindingComponent } from './twi-way-binding/twi-way-binding.component';
import {FormsModule} from "@angular/forms";
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { ChildToParentExampleComponent } from './child-to-parent/child-to-parent-example/child-to-parent-example.component';
import { GridingComponent } from './griding/griding.component';
import { CardgriddingComponent } from './griding/cardgridding/cardgridding.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NewsComponentComponent,
    NewsCardComponentComponent,
    TwiWayBindingComponent,
    ChildToParentComponent,
    ChildToParentExampleComponent,
    GridingComponent,
    CardgriddingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
