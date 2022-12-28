import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAlbumsComponent } from './detail-albums.component';

describe('DetailAlbumsComponent', () => {
  let component: DetailAlbumsComponent;
  let fixture: ComponentFixture<DetailAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAlbumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
