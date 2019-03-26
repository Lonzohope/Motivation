import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationDetailsComponent } from './motivation-details.component';

describe('MotivationDetailsComponent', () => {
  let component: MotivationDetailsComponent;
  let fixture: ComponentFixture<MotivationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
