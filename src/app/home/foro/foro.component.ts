import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForoService } from '../../service/foro.service';
import { OnInit } from '@angular/core';
import { MensajeI } from '../../models/mensaje';
import { Router } from '@angular/router';


@Component({
  selector: 'app-foro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './foro.component.html',
  styleUrl: './foro.component.css'
})
export class ForoComponent implements OnInit {
  constructor(private foroService: ForoService, private router: Router) { }
  ngOnInit() {
  }
  onCrearMensaje(form: { value: MensajeI; }): void {
    this.foroService.crearMensaje(form.value).subscribe(res => {
      // Almacenar el nombre de usuario en el servicio de autenticación
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
