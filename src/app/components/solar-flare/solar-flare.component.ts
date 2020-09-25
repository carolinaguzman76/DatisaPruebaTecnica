import { Component, OnInit } from '@angular/core';
import { SolarFlareModel } from 'src/app/model/solarFlareModel';
import { SolarFlareService } from '../../services/solar-flare.service';

@Component({
  selector: 'app-solar-flare',
  templateUrl: './solar-flare.component.html',
  styleUrls: ['./solar-flare.component.css'],
})
export class SolarFlareComponent implements OnInit {

  flare: SolarFlareModel;

  constructor(private solarFlareService: SolarFlareService) {}

  ngOnInit(): void {

    console.log('esto es el onInit');

   this.solarFlareService.getSolarFlare('2020-03-01','2020-07-01').subscribe(value => {
    this.flare = value;
    console.log(this.flare)

  },
    err => {
      this.flare = undefined;
      alert('Error al invocar a los servicios de la NASA. Por favor, intente otros valores');
    });

  }
}
