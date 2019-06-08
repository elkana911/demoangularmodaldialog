import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { My2nddialogComponent } from './my2nddialog.component';

describe('My2nddialogComponent', () => {
  let component: My2nddialogComponent;
  let fixture: ComponentFixture<My2nddialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ My2nddialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(My2nddialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
