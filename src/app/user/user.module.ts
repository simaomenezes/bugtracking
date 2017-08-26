import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

const userRouting: ModuleWithProviders = RouterModule.forChild([{
  path: 'user',
  component: UserComponent
}])

@NgModule({
  imports: [
    CommonModule,
    userRouting
  ],
  declarations: [
    UserComponent
  ]
})
export class UserModule { }
