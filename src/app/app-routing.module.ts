import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './guards/auth.guard';
import { MealsComponent } from './components/meals/meals.component';
import { ListaCompraComponent } from './components/lista-compra/lista-compra.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { DietasUsuariosComponent } from './components/dietas-usuarios/dietas-usuarios.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent, canActivate: [AuthGuardService]},
  {path: 'meals', component: MealsComponent, canActivate: [AuthGuardService]},
  {path: 'list', component: ListaCompraComponent, canActivate: [AuthGuardService]},
  {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuardService]},
  {path: 'contacto', component: ContactoComponent, canActivate: [AuthGuardService]},
  {path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuardService]},
  {path: 'dietsUsers', component: DietasUsuariosComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: '**',  redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
