import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarDetailComponent } from './nav-bar-detail.component';

describe('NavBarDetailComponent', () => {
  let component: NavBarDetailComponent;
  let fixture: ComponentFixture<NavBarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
