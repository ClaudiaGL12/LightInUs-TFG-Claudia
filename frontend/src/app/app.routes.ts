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
import { PlanesComponent } from './pages/planes/planes.component';


export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'login', component: LoginComponent, canActivate: [isGuestGuard]},
    {path: 'signup', component: SignupComponent, canActivate: [isGuestGuard]},
    {path: 'temas', component: TemasComponent, canActivate: [isUserAuthenticatedGuard]},
    {path: 'temas/:id', component: TemaComponent, canActivate: [isUserAuthenticatedGuard]},
    {path: 'profesionales', component: ProfesionalesComponent, canActivate: [isUserAuthenticatedGuard]},
    {path: 'profesionales/:id', component: ProfesionalesComponent, canActivate: [isUserAuthenticatedGuard]},
    {path: 'gestion', component: GestionComponent, canActivate: [isUserAuthenticatedGuard, isAdminGuard]},
    {path: 'planes', component: PlanesComponent, canActivate: [isUserAuthenticatedGuard]},
    {path: 'politica-cookies', component: PoliticaCookiesComponent},
    {path: '**', component: PageNotFoundComponent} // Redirigir a la página de error si la ruta no coincide
];
