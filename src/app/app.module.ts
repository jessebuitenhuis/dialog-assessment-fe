import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GewichtComponent } from './gewichtstracker/components/gewicht/gewicht.component';
import { HomeComponent } from './gewichtstracker/components/home/home.component';
import { OverzichtComponent } from './gewichtstracker/components/overzicht/overzicht.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GewichtComponent,
    OverzichtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
