import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date'
import { SearchService } from '../services/search.service';
import { AsteroidsNeowsModel } from '../model/asteroidsNeowsModel';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private initalDate: NgbDate;
  private finalDate: NgbDate;

  private newInitialDate: string;
  private newFinalDate: string;

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
        console.log('Error cuando intento buscar asteroides', err);
      });

  }

  dateFrom(Fecha: NgbDate): void {
    this.initalDate = Fecha;
    this.newInitialDate = this.initalDate.year + '-' + this.initalDate.month + '-' + this.initalDate.day;

  }

  dateTo(Fecha: NgbDate): void {
    this.finalDate = Fecha;
    this.newFinalDate = this.finalDate.year + '-' + this.finalDate.month + '-' + this.finalDate.day;

  }

}
