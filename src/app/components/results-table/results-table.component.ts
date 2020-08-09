import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AsteroidsNeowsModel, NearObject } from '../../model/asteroidsNeowsModel';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnChanges {

  @Input() asteroids: AsteroidsNeowsModel;

  nearEarthObjects: Array<NearObject> = [];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

    this.nearEarthObjects = [];

    Object.keys(this.asteroids.near_earth_objects).forEach(values => {
      this.nearEarthObjects.push(...this.asteroids.near_earth_objects[values]);
    });

  }




}

