import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForoService } from '../../service/foro.service';
import { OnInit } from '@angular/core';
import { MensajeI } from '../../models/mensaje';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foro',
  styleUrls: ['./foro.component.css'],  // Cambiado de styleUrl a styleUrls
  standalone: true,  // No estoy seguro de para qué se utiliza standalone, pero debería estar bien si lo necesitas.
  imports: [CommonModule, FormsModule],
  templateUrl: './foro.component.html'
})
export class ForoComponent implements OnInit {
  newmensaje: string='';
  comments$: Observable<any[]> | undefined;

  constructor(private foroService: ForoService) { }

  ngOnInit() {
    this.cargarMensajes();
  }

  cargarMensajes() {
    this.comments$ = this.foroService.getMensajes();
  }

  publicarMensaje(newmensaje: string) {
    if (newmensaje.trim() !== '') {
      this.foroService.crearMensaje(newmensaje).subscribe(
        () => {
          this.cargarMensajes();
          this.newmensaje = '';
        },
        (error) => {
          console.error('Error adding comment:', error);
        }
      );
    }
  }
}
