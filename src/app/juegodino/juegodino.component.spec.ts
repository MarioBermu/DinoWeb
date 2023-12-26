import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegodinoComponent } from './juegodino.component';

describe('JuegodinoComponent', () => {
  let component: JuegodinoComponent;
  let fixture: ComponentFixture<JuegodinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegodinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuegodinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
