import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';



@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent
    
  ],
  imports: [
  BrowserModule,
  NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
