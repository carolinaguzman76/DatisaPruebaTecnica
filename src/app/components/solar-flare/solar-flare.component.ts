import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Instruments, SolarFlareModel } from 'src/app/model/solarFlareModel';
import { SolarFlareService } from '../../services/solar-flare.service';

@Component({
  selector: 'app-solar-flare',
  templateUrl: './solar-flare.component.html',
  styleUrls: ['./solar-flare.component.css'],
})
export class SolarFlareComponent implements OnInit {
  @Input() flares: SolarFlareModel[];

  constructor() {}

  ngOnInit(): void {}
}
