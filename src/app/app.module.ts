import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultsTableComponent } from './components/results-table/results-table.component';
import { SolarFlareComponent } from './components/solar-flare/solar-flare.component';
import { SearchSolarFlareComponent } from './components/search-solar-flare/search-solar-flare.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsTableComponent,
    SolarFlareComponent,
    SearchSolarFlareComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
