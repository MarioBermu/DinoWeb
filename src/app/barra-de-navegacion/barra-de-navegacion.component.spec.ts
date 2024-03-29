import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDeNavegacionComponent } from './barra-de-navegacion.component';

describe('BarraDeNavegacionComponent', () => {
  let component: BarraDeNavegacionComponent;
  let fixture: ComponentFixture<BarraDeNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraDeNavegacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraDeNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
