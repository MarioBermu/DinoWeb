import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagejuegoComponent } from './pagejuego.component';

describe('PagejuegoComponent', () => {
  let component: PagejuegoComponent;
  let fixture: ComponentFixture<PagejuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagejuegoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagejuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
