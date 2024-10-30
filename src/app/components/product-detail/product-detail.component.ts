import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../modal/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  products: Product[] = [
    { id: 1, name: 'Blusa Feminina', imageUrl: 'assets/blusa.jpg', description: 'Blusa leve e confortável', price: 89.99 },
    { id: 2, name: 'Calça Jeans', imageUrl: 'assets/calca.jpg', description: 'Calça jeans de alta qualidade', price: 119.99 },
    { id: 3, name: 'Vestido Floral', imageUrl: 'assets/vestido.jpg', description: 'Vestido floral para o verão', price: 149.99 },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find((p) => p.id === productId);
  }
}
