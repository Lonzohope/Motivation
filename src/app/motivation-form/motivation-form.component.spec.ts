import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationFormComponent } from './motivation-form.component';

describe('MotivationFormComponent', () => {
  let component: MotivationFormComponent;
  let fixture: ComponentFixture<MotivationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
