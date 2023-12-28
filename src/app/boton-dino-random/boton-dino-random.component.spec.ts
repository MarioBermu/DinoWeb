import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDinoRandomComponent } from './boton-dino-random.component';

describe('BotonDinoRandomComponent', () => {
  let component: BotonDinoRandomComponent;
  let fixture: ComponentFixture<BotonDinoRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonDinoRandomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonDinoRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
