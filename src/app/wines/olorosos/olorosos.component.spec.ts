import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlorososComponent } from './olorosos.component';

describe('OlorososComponent', () => {
  let component: OlorososComponent;
  let fixture: ComponentFixture<OlorososComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlorososComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlorososComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
