import { Component } from '@angular/core';

import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { UserI } from '../models/user';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
  }
  onLogin(form: { value: UserI; }): void {
    this.authService.login(form.value).subscribe(res => {
      // Almacenar el nombre de usuario en el servicio de autenticación
      this.authService.setLoggedInUser(res.dataUser.name);
      this.router.navigateByUrl('/home');
    },
    (error) => {
      // Muestra el mensaje de error en tu plantilla HTML
      this.mostrarError();
    })
  };

  mostrarError(): void {
    const mensajeError = document.getElementById('mensajeError');
    if (mensajeError) {
      mensajeError.style.display = 'block';
    }
  }
}

