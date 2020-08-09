import { Component, OnInit, Input } from '@angular/core';
import { AsteroidsNeowsModel, NearObject } from '../model/asteroidsNeowsModel';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {

  @Input() asteroids: AsteroidsNeowsModel;

  nearEarthObjects: Array<NearObject> = [];

  constructor() { }

  ngOnInit(): void {

    Object.keys(this.asteroids.near_earth_objects).forEach(values => {
      this.nearEarthObjects.push(...this.asteroids.near_earth_objects[values]);
    });

    console.log(this.nearEarthObjects)
  }


}
