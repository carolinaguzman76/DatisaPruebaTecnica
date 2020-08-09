import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ResultsTableComponent } from './results-table/results-table.component';


@NgModule({
   declarations: [
      AppComponent,
      SearchComponent,
      ResultsTableComponent
   ],
   imports: [
      NgbModule,
      BrowserModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
