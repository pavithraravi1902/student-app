import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistationInfoComponent } from './registation-info.component';

describe('RegistationInfoComponent', () => {
  let component: RegistationInfoComponent;
  let fixture: ComponentFixture<RegistationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistationInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
