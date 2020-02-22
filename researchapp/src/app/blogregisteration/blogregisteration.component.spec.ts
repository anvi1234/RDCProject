import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogregisterationComponent } from './blogregisteration.component';

describe('BlogregisterationComponent', () => {
  let component: BlogregisterationComponent;
  let fixture: ComponentFixture<BlogregisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogregisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogregisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
