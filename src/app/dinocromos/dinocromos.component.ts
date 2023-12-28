import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraDeNavegacionComponent } from '../barra-de-navegacion/barra-de-navegacion.component';
import { CargarScriptsService } from '../cargar-scripts.service';

@Component({
  selector: 'app-dinocromos',
  standalone: true,
  imports: [CommonModule, BarraDeNavegacionComponent],
  templateUrl: './dinocromos.component.html',
  styleUrl: './dinocromos.component.css'
})
export class DinocromosComponent {
  constructor(private_cargarScripts:CargarScriptsService)
  {
    private_cargarScripts.cargar(["app"]);
  }

  addToCart() {
    // Lógica para agregar elementos
    const contenedor = document.getElementById('contenedor');
    if (contenedor) {
      const nuevoElemento = document.createElement('div');
      nuevoElemento.textContent = 'Nuevo Elemento';
      contenedor.appendChild(nuevoElemento);
    }
  }
}
