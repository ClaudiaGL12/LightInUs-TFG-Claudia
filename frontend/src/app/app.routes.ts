import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

export const routes: Routes = [
    {path: '', component: MainLayoutComponent, children: [
        { path: '', loadComponent: () => import('./pages/inicio/inicio.component').then(m => m.InicioComponent) },
        { path: 'temas', loadComponent: () => import('./pages/temas/temas.component').then(m => m.TemasComponent) },
        { path: 'profesionales', loadComponent: () => import('./pages/profesionales/profesionales.component').then(m => m.ProfesionalesComponent) },
    ]},
    {
        path: '',
        component: AuthLayoutComponent, children: [
          { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
          { path: 'signup', loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent) },
        ],
      },
    //{path: '', component: HomeComponent, title: 'Home'},
    // {path: 'login', component: LoginComponent, title: 'Login'},
    // {path: 'signup', component: SignupComponent, title: 'Sign up'},
    // {path: 'temas', component: TemasComponent, title: 'Temas'},
    // {path: 'temas/:id', component: TemaComponent, title: 'Tema'},
];
