import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartementByResidenceComponent } from './apartement-by-residence.component';

describe('ApartementByResidenceComponent', () => {
  let component: ApartementByResidenceComponent;
  let fixture: ComponentFixture<ApartementByResidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartementByResidenceComponent]
    });
    fixture = TestBed.createComponent(ApartementByResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
