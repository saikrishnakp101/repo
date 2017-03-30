import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './component/navbar.component';

import { AppComponent } from './app.component';
import { LoginComponent} from './component/login/login.component'
import { HomeComponent} from './component/home/home.component'
import { AboutComponent} from './component/about/about.component'
import { ContactComponent} from './component/contact/contact.component'
import {PopupModule} from 'ng2-opd-popup';

import { routing } from './routing/app.routing';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, HomeComponent , LoginComponent , AboutComponent , ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
     PopupModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
