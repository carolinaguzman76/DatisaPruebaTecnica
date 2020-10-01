import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsteroidsNeowsModel } from './../model/asteroidsNeowsModel';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
    console.log('esto es el constructor');
    console.log(environment);
   }

  getAsteroids(start_date: string, end_date: string): Observable<AsteroidsNeowsModel> {
    return this.http.get<AsteroidsNeowsModel>(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${environment.apiKey}`);

  }
}
