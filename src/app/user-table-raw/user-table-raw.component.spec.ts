import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableRawComponent } from './user-table-raw.component';

describe('UserTableRawComponent', () => {
  let component: UserTableRawComponent;
  let fixture: ComponentFixture<UserTableRawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTableRawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
