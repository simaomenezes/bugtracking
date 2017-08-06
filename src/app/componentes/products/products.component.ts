import { ProductsService } from './../../services/products.service';
import { Products } from './../../model/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Products[];
  product: Products;

  constructor(private produtsService: ProductsService) { }

  ngOnInit() {
    this.produtsService.getProductsAll().then(products => this.products = products);
    this.product = new Products();
  }

  createProduct(product: Products): void {
    this.produtsService.createProduct(product)
    .then( product => this.products.push(product));
  }

}
