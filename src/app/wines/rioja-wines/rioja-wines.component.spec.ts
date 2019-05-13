import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiojaWinesComponent } from './rioja-wines.component';

describe('RiojaWinesComponent', () => {
  let component: RiojaWinesComponent;
  let fixture: ComponentFixture<RiojaWinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiojaWinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiojaWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
