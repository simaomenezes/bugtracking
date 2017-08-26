import { ApiService } from './shared/services/api.service';
import { BugModule } from './bug/bug.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    UserModule,
    BugModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
