import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarFlareComponent } from './solar-flare.component';

describe('SolarFlareComponent', () => {
  let component: SolarFlareComponent;
  let fixture: ComponentFixture<SolarFlareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarFlareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarFlareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
