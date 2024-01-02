import { Component } from '@angular/core';

import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { UserI } from '../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  constructor(private authService: AuthService, private router:Router) { }
  ngOnInit() {
  }
  onRegister(form: { value: UserI; }): void {
    console.log('registro',form.value);
    this.authService.register(form.value).subscribe(res => {
      this.router.navigateByUrl('/login');
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
