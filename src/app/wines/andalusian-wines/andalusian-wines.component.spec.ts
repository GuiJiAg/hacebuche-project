import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndalusianWinesComponent } from './andalusian-wines.component';

describe('AndalusianWinesComponent', () => {
  let component: AndalusianWinesComponent;
  let fixture: ComponentFixture<AndalusianWinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndalusianWinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndalusianWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
