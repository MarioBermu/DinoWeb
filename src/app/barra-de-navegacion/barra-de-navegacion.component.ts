import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { DinocromosComponent } from '../dinocromos/dinocromos.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-barra-de-navegacion',
  standalone: true,
  imports: [CommonModule, LogoComponent,DinocromosComponent,RouterModule],
  templateUrl: './barra-de-navegacion.component.html',
  styleUrl: './barra-de-navegacion.component.css'
})
export class BarraDeNavegacionComponent {

}
