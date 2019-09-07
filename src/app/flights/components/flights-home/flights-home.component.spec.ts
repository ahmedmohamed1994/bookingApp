import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsHomeComponent } from './flights-home.component';

describe('FlightsHomeComponent', () => {
  let component: FlightsHomeComponent;
  let fixture: ComponentFixture<FlightsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightsHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
