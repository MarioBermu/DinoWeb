import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraDeNavegacionComponent } from '../barra-de-navegacion/barra-de-navegacion.component';

@Component({
  selector: 'app-juegodino',
  standalone: true,
  imports: [CommonModule, BarraDeNavegacionComponent],
  templateUrl: './juegodino.component.html',
  styleUrl: './juegodino.component.css'
})
export class JuegodinoComponent {

  imagenSuelo = '/img/suelo.png';
  imagenDino = '/img/dino.png';

}
