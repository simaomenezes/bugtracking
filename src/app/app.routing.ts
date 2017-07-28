import { ModuleWithProviders } from '@angular/core';
import { UsersComponent } from './componentes/users/users.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { Routes, RouterModule } from '@angular/router';

// rotas declaradas
const APP_ROUTES: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);