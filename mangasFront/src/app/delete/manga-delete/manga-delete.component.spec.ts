import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaDeleteComponent } from './manga-delete.component';

describe('MangaDeleteComponent', () => {
  let component: MangaDeleteComponent;
  let fixture: ComponentFixture<MangaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
