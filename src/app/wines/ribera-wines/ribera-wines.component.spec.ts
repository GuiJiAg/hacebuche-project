import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiberaWinesComponent } from './ribera-wines.component';

describe('RiberaWinesComponent', () => {
  let component: RiberaWinesComponent;
  let fixture: ComponentFixture<RiberaWinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiberaWinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiberaWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
