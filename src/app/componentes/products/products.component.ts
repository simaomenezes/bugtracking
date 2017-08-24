import { AlertComponent } from './../alert/alert.component';
import { DialogService } from 'ng2-bootstrap-modal';
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

  constructor(private produtsService: ProductsService, private dialogService: DialogService) { }

  ngOnInit() {
    this.produtsService.getProductsAll().then(products => this.products = products);
    this.product = new Products();
  }

  createProduct(product: Products): void {
    this.produtsService.createProduct(product)
    .then( product => this.products.push(product));
  }

  teste(){
    //alert("sadsad");
  }


  showAlert() {
    //this.dialogService.addDialog(AlertComponent, {title:'Alert title!', message:'Alert message!!!'});
  }


  onSubmit(f){
    console.log(f);
  }
}
