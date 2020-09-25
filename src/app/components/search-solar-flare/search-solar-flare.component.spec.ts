import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSolarFlareComponent } from './search-solar-flare.component';

describe('SearchSolarFlareComponent', () => {
  let component: SearchSolarFlareComponent;
  let fixture: ComponentFixture<SearchSolarFlareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSolarFlareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSolarFlareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
