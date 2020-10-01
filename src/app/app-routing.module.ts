import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchSolarFlareComponent } from './components/search-solar-flare/search-solar-flare.component';
import { SearchComponent } from './components/search/search.component';
import { SolarFlareComponent } from './components/solar-flare/solar-flare.component';


const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'searchSolarFlare', component: SearchSolarFlareComponent },
  { path: '**', redirectTo: 'search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
