import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMusiqueComponent } from './detail-musique.component';

describe('DetailMusiqueComponent', () => {
  let component: DetailMusiqueComponent;
  let fixture: ComponentFixture<DetailMusiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMusiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMusiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
