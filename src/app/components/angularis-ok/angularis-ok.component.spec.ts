import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularisOKComponent } from './angularis-ok.component';

describe('AngularisOKComponent', () => {
  let component: AngularisOKComponent;
  let fixture: ComponentFixture<AngularisOKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularisOKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularisOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
