import { HomeModule } from './home/home.module';
import { ApiService } from './shared/services/api.service';
import { BugModule } from './bug/bug.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';


//criando rota e configurando
const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: true});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    UserModule,
    BugModule,
    HomeModule,
    rootRouting
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
