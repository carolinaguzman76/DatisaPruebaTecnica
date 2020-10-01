import {   Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Instruments, SolarFlareModel } from 'src/app/model/solarFlareModel';
import { SolarFlareService } from '../../services/solar-flare.service';

@Component({
  selector: 'app-solar-flare',
  templateUrl: './solar-flare.component.html',
  styleUrls: ['./solar-flare.component.css'],
})
export class SolarFlareComponent implements OnChanges {
  @Input() flare: SolarFlareModel;

  instruments: Array<Instruments> = [];

  constructor() {}

  ngOnInit(): void {

    console.log('esto es el OnInit')
    console.log(Object.keys(this.flare))

  }


  ngOnChanges(changes: SimpleChanges): void {
    this.instruments = [];

    Object.keys(this.flare.instruments).forEach((values) => {
      this.instruments.push(...this.flare.instruments[values]);
    });

  }
}
