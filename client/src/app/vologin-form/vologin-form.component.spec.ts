import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VologinFormComponent } from './vologin-form.component';

describe('VologinFormComponent', () => {
  let component: VologinFormComponent;
  let fixture: ComponentFixture<VologinFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VologinFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VologinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
