import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisonalComponent } from './provisonal.component';

describe('ProvisonalComponent', () => {
  let component: ProvisonalComponent;
  let fixture: ComponentFixture<ProvisonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
