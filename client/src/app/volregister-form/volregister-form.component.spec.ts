import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolregisterFormComponent } from './volregister-form.component';

describe('VolregisterFormComponent', () => {
  let component: VolregisterFormComponent;
  let fixture: ComponentFixture<VolregisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolregisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolregisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
