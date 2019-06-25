import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntigenComponent } from './antigen.component';

describe('AntigenComponent', () => {
  let component: AntigenComponent;
  let fixture: ComponentFixture<AntigenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntigenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
