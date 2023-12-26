import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraDeNavegacionComponent } from '../barra-de-navegacion/barra-de-navegacion.component';

@Component({
  selector: 'app-dinocromos',
  standalone: true,
  imports: [CommonModule, BarraDeNavegacionComponent],
  templateUrl: './dinocromos.component.html',
  styleUrl: './dinocromos.component.css'
})
export class DinocromosComponent {

}