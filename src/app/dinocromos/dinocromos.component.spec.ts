import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinocromosComponent } from './dinocromos.component';

describe('DinocromosComponent', () => {
  let component: DinocromosComponent;
  let fixture: ComponentFixture<DinocromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinocromosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DinocromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
