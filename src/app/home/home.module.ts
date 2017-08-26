import { BugComponent } from './../bug/bug.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const homeRouting: ModuleWithProviders = RouterModule.forChild([{
  path: '',
  component: HomeComponent
}]);

@NgModule({
  imports: [
    CommonModule,
    homeRouting
  ],
  declarations: [
    HomeComponent, BugComponent
  ]
})
export class HomeModule { }
