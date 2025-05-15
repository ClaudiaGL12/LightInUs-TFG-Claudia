import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { Main2LayoutComponent } from './layout/main2-layout/main2-layout.component';

export const routes: Routes = [
    {path: '', component: MainLayoutComponent, children: [
        { path: '', loadComponent: () => import('./pages/inicio/inicio.component').then(m => m.InicioComponent) },
        { path: 'temas', loadComponent: () => import('./pages/temas/temas.component').then(m => m.TemasComponent) },
        { path: 'profesionales', loadComponent: () => import('./pages/profesionales/profesionales.component').then(m => m.ProfesionalesComponent) },
    ]},

    {path: '', component: AuthLayoutComponent, children: [
        { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
        { path: 'signup', loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent) },
      ],
    },

    {path: '', component: Main2LayoutComponent, children: [
        { path: 'perfil', loadComponent: () => import('./pages/perfil/perfil.component').then(m => m.PerfilComponent) },
        { path: 'temas/:id', loadComponent: () => import('./pages/temas/temas.component').then(m => m.TemasComponent) },
        { path: 'profesionales/:id', loadComponent: () => import('./pages/profesionales/profesionales.component').then(m => m.ProfesionalesComponent) },
      ]

    }
];
