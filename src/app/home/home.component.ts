import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import{ BarraDeNavegacionComponent } from '../barra-de-navegacion/barra-de-navegacion.component';
import { BotonDinoRandomComponent } from '../boton-dino-random/boton-dino-random.component';
import { JuegodinoComponent } from '../juegodino/juegodino.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, BarraDeNavegacionComponent,BotonDinoRandomComponent, JuegodinoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
