import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMusiquesComponent } from './detail-musiques.component';

describe('DetailMusiquesComponent', () => {
  let component: DetailMusiquesComponent;
  let fixture: ComponentFixture<DetailMusiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMusiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMusiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
