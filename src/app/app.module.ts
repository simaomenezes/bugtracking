import { UsersService } from './services/users.service';
import { ProductsService } from './services/products.service';
import { BugsService } from './services/bugs.service';

import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BugsComponent } from './componentes/bugs/bugs.component';
import { UsersComponent } from './componentes/users/users.component';
import { ProductsComponent } from './componentes/products/products.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductdetalheComponent } from './componentes/products/productdetalhe/productdetalhe.component';
import { ScriptComponentComponent } from './componentes/script-component/script-component.component';



import { CommonModule } from "@angular/common";

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { AlertComponent } from './componentes/alert/alert.component';





@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    UsersComponent,
    ProductsComponent,
    HomeComponent,
    LoginComponent,
    ProductdetalheComponent,
    ScriptComponentComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,

    CommonModule,
    // BootstrapModalModule
    BootstrapModalModule.forRoot({container:document.body})
  ],
  providers: [BugsService, ProductsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
