import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForoService } from '../../service/foro.service';
import { OnInit } from '@angular/core';
import { MensajeI } from '../../models/mensaje';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-foro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './foro.component.html',
  styleUrl: './foro.component.css'
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

  publicarMensaje() {
    if (this.newmensaje.trim() !== '') {
      this.foroService.crearMensaje(this.newmensaje).subscribe(
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
