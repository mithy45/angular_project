import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAsideComponent } from './nav-bar-aside.component';

describe('NavBarAsideComponent', () => {
  let component: NavBarAsideComponent;
  let fixture: ComponentFixture<NavBarAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarAsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
