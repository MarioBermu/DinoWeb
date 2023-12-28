import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraDeNavegacionComponent } from '../barra-de-navegacion/barra-de-navegacion.component';
import { CargarScriptsService } from '../cargar-scripts.service';

@Component({
  selector: 'app-juegodino',
  standalone: true,
  imports: [CommonModule, BarraDeNavegacionComponent],
  templateUrl: './juegodino.component.html',
  styleUrl: './juegodino.component.css',
  host: {ngSkipHydration: 'true'}
})
export class JuegodinoComponent implements OnInit, AfterViewInit {
  constructor(private_cargarScripts:CargarScriptsService)
  {
    private_cargarScripts.cargar(["app2"]);
  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

  }

  imagenSuelo = '/img/suelo.png';
  imagenDino = '/img/dino.png';

}
