import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BarraDeNavegacionComponent } from './barra-de-navegacion/barra-de-navegacion.component';
import { LogoComponent } from "./logo/logo.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, BarraDeNavegacionComponent, LogoComponent],
    template: `
    <main>
      <app-home></app-home>
    </main>`,
})
export class AppComponent {
  title = 'DinoWeb';
}
