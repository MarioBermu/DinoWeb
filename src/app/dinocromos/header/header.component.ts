import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../../cart/cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  viewCart: boolean = false;

  onToggleCart() {
    this.viewCart = !this.viewCart;
  }

}
