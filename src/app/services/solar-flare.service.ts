import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolarFlareModel } from './../model/solarFlareModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolarFlareService {

  constructor(private http: HttpClient) {

    console.log('esto es el constructor');
    console.log(environment);
   }

  getSolarFlare(start_date: string, end_date: string): Observable<SolarFlareModel> {
    const urlNasa = `https://api.nasa.gov/DONKI/FLR?startDate=${start_date}&endDate=${end_date}&api_key=${environment.apiKey}`;
    console.log(urlNasa);
    return this.http.get<SolarFlareModel>(urlNasa);

  }
}
