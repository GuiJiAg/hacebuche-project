import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbariniosComponent } from './albarinios.component';

describe('AlbariniosComponent', () => {
  let component: AlbariniosComponent;
  let fixture: ComponentFixture<AlbariniosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbariniosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbariniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
