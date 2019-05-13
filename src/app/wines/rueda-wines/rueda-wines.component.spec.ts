import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuedaWinesComponent } from './rueda-wines.component';

describe('RuedaWinesComponent', () => {
  let component: RuedaWinesComponent;
  let fixture: ComponentFixture<RuedaWinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuedaWinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuedaWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
