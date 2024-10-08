import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowComponent } from './tvshow.component';

describe('TvshowComponent', () => {
  let component: TvshowComponent;
  let fixture: ComponentFixture<TvshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvshowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
