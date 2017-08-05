import { UsersService } from './services/users.service';
import { ProductsService } from './services/products.service';
import { BugsService } from './services/bugs.service';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugsComponent } from './componentes/bugs/bugs.component';
import { UsersComponent } from './componentes/users/users.component';
import { ProductsComponent } from './componentes/products/products.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    UsersComponent,
    ProductsComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    MaterializeModule
  ],
  providers: [BugsService, ProductsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
