import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { Main2LayoutComponent } from './layout/main2-layout/main2-layout.component';
import { isGuestGuard, isUserAuthenticatedGuard, isAdminGuard } from './guards/auth.guard';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TemasComponent } from './pages/temas/temas.component';
import { TemaComponent } from './pages/temas/tema/tema.component';
import { ProfesionalesComponent } from './pages/profesionales/profesionales.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { PoliticaCookiesComponent } from './pages/politica-cookies/politica-cookies.component';


export const routes: Routes = [
    // {path: '', component: MainLayoutComponent, children: [
    //     { path: '', loadComponent: () => import('./pages/inicio/inicio.component').then(m => m.InicioComponent) },
    //     { path: 'temas', loadComponent: () => import('./pages/temas/temas.component').then(m => m.TemasComponent) },
    //     { path: 'profesionales', loadComponent: () => import('./pages/profesionales/profesionales.component').then(m => m.ProfesionalesComponent) },
    // ]},

    // {path: '', component: AuthLayoutComponent, children: [
    //     { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
    //     { path: 'signup', loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent) },
    //   ],
    // },

    // {path: '', component: Main2LayoutComponent, children: [
    //     { path: 'perfil', loadComponent: () => import('./pages/perfil/perfil.component').then(m => m.PerfilComponent) },
    //     { path: 'temas/:id', loadComponent: () => import('./pages/temas/temas.component').then(m => m.TemasComponent) },
    //     { path: 'profesionales/:id', loadComponent: () => import('./pages/profesionales/profesionales.component').then(m => m.ProfesionalesComponent) },
    //   ]

    // }

    {path: '', component: InicioComponent},
    {path: 'login', component: LoginComponent, canActivate: [isGuestGuard]},
    {path: 'signup', component: SignupComponent, canActivate: [isGuestGuard]},
    {path: 'temas', component: TemasComponent, canActivate: [isUserAuthenticatedGuard]},
    {path: 'temas/:id', component: TemaComponent, canActivate: [isUserAuthenticatedGuard]},
    {path: 'profesionales', component: ProfesionalesComponent, canActivate: [isUserAuthenticatedGuard]},
    {path: 'profesionales/:id', component: ProfesionalesComponent, canActivate: [isUserAuthenticatedGuard]},
    {path: 'gestion', component: GestionComponent, canActivate: [isUserAuthenticatedGuard, isAdminGuard]},
    {path: 'politica-cookies', component: PoliticaCookiesComponent},
    {path: '**', component: PageNotFoundComponent} // Redirigir a la página de error si la ruta no coincide
];
