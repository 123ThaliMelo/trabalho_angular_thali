import { Component } from '@angular/core';
import { Product } from '../../modal/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css' ]  // Aqui você vê qual CSS está sendo usado
})
export class HomeComponent {
  products: Product[] = [
    { id: 1, name: 'Blusa Feminina', imageUrl: 'assets/blusa.jpg', description: 'Blusa leve e confortável', price: 89.99 },
    { id: 2, name: 'Calça Jeans', imageUrl: 'assets/calca.jpg', description: 'Calça jeans de alta qualidade', price: 119.99 },
    { id: 3, name: 'Vestido Floral', imageUrl: 'assets/vestido.jpg', description: 'Vestido floral para o verão', price: 149.99 },
  ];
}
