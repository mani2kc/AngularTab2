import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from "@angular/common/http";
//import { Http } from "@angular/http";
import { HttpModule } from "@angular/http";
import {DataService} from "./data.service";
//import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    //HttpClient,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
