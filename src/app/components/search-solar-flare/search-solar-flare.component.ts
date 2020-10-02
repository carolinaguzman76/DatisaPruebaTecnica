import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date'
import { SolarFlareService } from '../../services/solar-flare.service';
import { SolarFlareModel } from '../../model/solarFlareModel';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-solar-flare',
  templateUrl: './search-solar-flare.component.html',
  styleUrls: ['./search-solar-flare.component.css']
})
export class SearchSolarFlareComponent implements OnInit {

  initialDate: NgbDate;
  finalDate: NgbDate;

  newInitialDate: string;
  newFinalDate: string;



  flare: SolarFlareModel[];

  constructor(private searchService: SolarFlareService, private calendar: NgbCalendar) {

   }

  ngOnInit(): void {}

  searchSolarFlare(): void {

    this.searchService.getSolarFlare(this.newInitialDate, this.newFinalDate).subscribe(value => {
      this.flare = value;

      console.log('esto es el valor del servicio');
      console.log(value);

    },
      err => {
        this.flare = undefined;
        alert('Error al invocar a los servicios de la NASA. Por favor, intente otros valores');
      });

  }

  dateFrom(fecha: NgbDate): void {
    this.newInitialDate = fecha.year + '-' + fecha.month + '-' + fecha.day;
    this.initialDate = fecha;

  }

  dateTo(fecha: NgbDate): void {
    this.newFinalDate = fecha.year + '-' + fecha.month + '-' + fecha.day;

  }

  getMaxDate(): NgbDateStruct {

    if (this.initialDate) {

      const finalMaxDate: NgbDate = this.calendar.getNext(this.initialDate, 'd', 30);
      const newMaxDate: NgbDateStruct = { day: finalMaxDate.day, month: finalMaxDate.month, year: finalMaxDate.year };
      return newMaxDate;

    }
    return undefined;
  }

  getMinDate(): NgbDateStruct {

    if (this.initialDate) {

      const finalMinDate: NgbDateStruct = {day: this.initialDate.day, month: this.initialDate.month, year: this.initialDate.year};
      return finalMinDate;
    }
  }


}
