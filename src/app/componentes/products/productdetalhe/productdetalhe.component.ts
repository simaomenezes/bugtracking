import { ProductsService } from './../../../services/products.service';
import { Products } from './../../../model/products';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-productdetalhe',
  templateUrl: './productdetalhe.component.html',
  styleUrls: ['./productdetalhe.component.css']
})
export class ProductdetalheComponent implements OnInit {

  product: Products;

  id: string;
  cdProduct: string;
  nmProduct: string;

  constructor(private service: ProductsService, private route: ActivatedRoute, private locate: Location) {
    this.id = this.route.snapshot.params['id'];
    this.cdProduct = this.route.snapshot.params['cdProduct'];
    this.nmProduct = this.route.snapshot.params['nmProduct'];
  }

  ngOnInit() {
    // this.route.params.switchMap((params: Params) => this.service.getProductById(+params['id'])).subscribe(product => this.product = product);

    this.route.paramMap.switchMap((params: ParamMap) => this.service.getProductById(+params.get('id'), +params.get('cdProduct'), params.get('nmProduct'))).subscribe((product: Products) => this.product = product);

  }

}
