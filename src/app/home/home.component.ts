import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import{ BarraDeNavegacionComponent } from '../barra-de-navegacion/barra-de-navegacion.component';
import { BotonDinoRandomComponent } from '../boton-dino-random/boton-dino-random.component';
import { JuegodinoComponent } from '../juegodino/juegodino.component';
import { HoraDelFinComponent } from './hora-del-fin/hora-del-fin.component';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ForoComponent } from './foro/foro.component';
import { PreguntaComponent } from './test/pregunta/pregunta.component';
import { WelcomeComponent } from './test/welcome/welcome.component';






@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, BarraDeNavegacionComponent,BotonDinoRandomComponent, JuegodinoComponent, HoraDelFinComponent, ForoComponent, PreguntaComponent, WelcomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  loggedInUsers: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.loggedInUsers.subscribe(name => {
      this.loggedInUsers = name;
    });
  }

  onLogout(): void {
    this.authService.logout();
    // this.router.navigateByUrl('/home');
    this.router.navigateByUrl('/admin');
  }
}
