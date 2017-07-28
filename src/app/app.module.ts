import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugsComponent } from './componentes/bugs/bugs.component';
import { UsersComponent } from './componentes/users/users.component';
import { ProductsComponent } from './componentes/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    UsersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
