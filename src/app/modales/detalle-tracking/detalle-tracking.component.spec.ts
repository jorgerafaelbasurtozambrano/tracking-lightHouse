import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTrackingComponent } from './detalle-tracking.component';

describe('DetalleTrackingComponent', () => {
  let component: DetalleTrackingComponent;
  let fixture: ComponentFixture<DetalleTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
