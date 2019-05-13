import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrambledsComponent } from './scrambleds.component';

describe('ScrambledsComponent', () => {
  let component: ScrambledsComponent;
  let fixture: ComponentFixture<ScrambledsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrambledsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrambledsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
