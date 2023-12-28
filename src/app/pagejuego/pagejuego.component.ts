import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraDeNavegacionComponent } from '../barra-de-navegacion/barra-de-navegacion.component';
import { JuegodinoComponent } from '../juegodino/juegodino.component';

@Component({
  selector: 'app-pagejuego',
  standalone: true,
  imports: [CommonModule, BarraDeNavegacionComponent, JuegodinoComponent],
  templateUrl: './pagejuego.component.html',
  styleUrl: './pagejuego.component.css'
})
export class PagejuegoComponent {

}
