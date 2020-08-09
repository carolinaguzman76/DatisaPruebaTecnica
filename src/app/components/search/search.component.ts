import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date'
import { SearchService } from '../../services/search.service';
import { AsteroidsNeowsModel } from '../../model/asteroidsNeowsModel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  newInitialDate: string;
  newFinalDate: string;

  asteroids: AsteroidsNeowsModel;

  constructor(private searchService: SearchService) {
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

  }

  dateTo(fecha: NgbDate): void {
    this.newFinalDate = fecha.year + '-' + fecha.month + '-' + fecha.day;

  }

}
