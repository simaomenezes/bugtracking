import { Tproform } from './../../../model/tproform';
import { ProductsService } from './../../../services/products.service';
import { Products } from './../../../model/products';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-productdetalhe',
  templateUrl: './productdetalhe.component.html',
  styleUrls: ['./productdetalhe.component.css']
})
export class ProductdetalheComponent implements OnInit {

  product: Products;
  tproForm: Tproform;

  id: string;
  cdProduct: string;
  nmProduct: string;

  cdFormulario: string; 
  cdUsuario: string;
  nuAtendimento: number;

  incricao: Subscription;

  constructor(private service: ProductsService, private route: ActivatedRoute, private locate: Location, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    this.cdProduct = this.route.snapshot.params['cdProduct'];
    this.nmProduct = this.route.snapshot.params['nmProduct'];
  }

  ngOnInit() {
    // this.route.params.switchMap((params: Params) => this.service.getProductById(+params['id'])).subscribe(product => this.product = product);
    // this.route.paramMap.switchMap((params: ParamMap) => this.service.getProductById(+params.get('id'), +params.get('cdProduct'), params.get('nmProduct'))).subscribe((product: Products) => this.product = product);
    
    // this.route.paramMap.switchMap((params: ParamMap) => this.service.getProductById(+params.get('id'))).subscribe((product: Products) => this.product = product);



    this.incricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.cdFormulario = queryParams['cdFormulario'];
        this.cdUsuario = queryParams['cdUsuario'];
        this.nuAtendimento = queryParams['nuAtendimento'];
      }
    );



    this.service.findByCdFormCdUsuarioNuAtendimento(this.cdFormulario, this.cdUsuario, this.nuAtendimento).then( tproForm => this.tproForm = tproForm).catch();
    // this.service.findByCdFormCdUsuarioNuAtendimento(this.cdFormulario, this.cdUsuario, this.nuAtendimento).then()


    // this.route.paramMap.switchMap((params: ParamMap) => this.service.findByCdFormCdUsuarioNuAtendimento( params.get(this.cdFormulario), params.get(this.cdUsuario), +params.get(this.nuAtendimento)).then(tproform => this.tproForm = tproform));


    // this.incricao = this.route.queryParams.subscribe(
    //   (queryParams: any) => {
    //     this.cdFormulario = queryParams['cdFormulario'];
    //   }
    // );






  }

}
