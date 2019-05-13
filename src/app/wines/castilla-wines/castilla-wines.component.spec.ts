import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastillaWinesComponent } from './castilla-wines.component';

describe('CastillaWinesComponent', () => {
  let component: CastillaWinesComponent;
  let fixture: ComponentFixture<CastillaWinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastillaWinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastillaWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
