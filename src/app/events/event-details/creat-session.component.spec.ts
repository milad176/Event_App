import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatSessionComponent } from './creat-session.component';

describe('CreatSessionComponent', () => {
  let component: CreatSessionComponent;
  let fixture: ComponentFixture<CreatSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
