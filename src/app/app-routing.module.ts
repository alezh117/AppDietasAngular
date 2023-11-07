import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './guards/auth.guard';

const routes: Routes = [
  {path: 'index', component: IndexComponent, canActivate: [AuthGuardService]}, // todo guard. verificar token y si no redirect a login.
  {path: 'login', component: LoginComponent},
  {path: '**',  redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
