import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boton-dino-random',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton-dino-random.component.html',
  styleUrl: './boton-dino-random.component.css'
})
export class BotonDinoRandomComponent {
  frase: string='';
  randomDino() {


    this.frase = 'DinooOooOoOoOOooOOoo';
  }

}
