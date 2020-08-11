import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date'
import { SearchService } from '../../services/search.service';
import { AsteroidsNeowsModel } from '../../model/asteroidsNeowsModel';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  initialDate: NgbDate;
  finalDate: NgbDate;

  newInitialDate: string;
  newFinalDate: string;



  asteroids: AsteroidsNeowsModel;

  constructor(private searchService: SearchService, private calendar: NgbCalendar) {
  }

  ngOnInit(): void {
  }

  searchAsteroids(): void {

    this.searchService.getAsteroids(this.newInitialDate, this.newFinalDate).subscribe(value => {
      this.asteroids = value;

    },
      err => {
        this.asteroids = undefined;
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

      const finalMaxDate: NgbDate = this.calendar.getNext(this.initialDate, 'd', 7);
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
