import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-barra-de-navegacion',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './barra-de-navegacion.component.html',
  styleUrl: './barra-de-navegacion.component.css'
})
export class BarraDeNavegacionComponent {

}
