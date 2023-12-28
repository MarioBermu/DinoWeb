import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { DinocromosComponent } from '../dinocromos/dinocromos.component';
import { JuegodinoComponent } from '../juegodino/juegodino.component';
import { RouterModule } from '@angular/router';
import { PagejuegoComponent } from '../pagejuego/pagejuego.component';

@Component({
  selector: 'app-barra-de-navegacion',
  standalone: true,
  imports: [CommonModule, LogoComponent,DinocromosComponent,RouterModule ,JuegodinoComponent,PagejuegoComponent],
  templateUrl: './barra-de-navegacion.component.html',
  styleUrl: './barra-de-navegacion.component.css'
})
export class BarraDeNavegacionComponent {

}
