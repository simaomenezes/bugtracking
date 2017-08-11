import { inject } from '@angular/core/testing';
import { Tproform } from './../../../model/tproform';
import { ProductsService } from './../../../services/products.service';
import { Products } from './../../../model/products';
import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, Params, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import { DomSanitizer, SafeResourceUrl, SafeUrl, DOCUMENT } from '@angular/platform-browser';



@Component({
  selector: 'app-productdetalhe',
  templateUrl: './productdetalhe.component.html',
  styleUrls: ['./productdetalhe.component.css']
})
export class ProductdetalheComponent implements OnInit, AfterViewInit{

  product: Products;
  tproForm: Tproform;

  id: string;
  cdProduct: string;
  nmProduct: string;

  cdFormulario: string; 
  cdUsuario: string;
  nuAtendimento: number;

  incricao: Subscription;

  html: string = 'alert("Esse assim da certo");';





// ##############################
 @Input()
    src: string;

    @Input()
    type: string;

    @ViewChild('script') script: ElementRef;



  constructor(private service: ProductsService, private route: ActivatedRoute, private locate: Location, private router: Router, private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {

    
    this.route.params.switchMap((params: Params) => this.service.getProductByIdTest(+params['id'])).subscribe(product => this.product = product); 
    var  str_Elemenr = `
      ${ this.html }



      alert("HAHAH JJJJJ ASASAS")
    `;
    var nodeElement =   this.createTagScript("script",str_Elemenr);
    document.body.appendChild(nodeElement);
  }


  createTagScript(node_name,textElement) {
    var _nodeElement = document.createElement(node_name);
    _nodeElement.innerHTML = textElement;
    return _nodeElement;
  }

  createTagScriptSImao(textElement) {
    var _nodeElement = document.createElement("script");
    _nodeElement.innerHTML = textElement;
    return _nodeElement;
}

 convertToScript() {
        var element = this.script.nativeElement;
        var script = document.createElement("script");
        script.type = this.type ? this.type : "text/javascript";
        if (this.src) {
            script.src = this.src;
        }
        if (element.innerHTML) {
            script.innerHTML = element.innerHTML;
        }
        var parent = element.parentElement;
        parent.parentElement.replaceChild(script, parent);
    }




  ngAfterViewInit(): void {
    this.convertToScript();
  }


}


