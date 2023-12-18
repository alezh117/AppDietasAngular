//Components
import { BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent} from './components/login/login.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { MealsComponent } from './components/meals/meals.component';
import { ListaCompraComponent } from './components/lista-compra/lista-compra.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ContactoComponent } from './components/contacto/contacto.component';

//Services
import { userStoreService } from './services/store/userStore.Service';
import { AdminStoreService } from 'src/app/services/store/admin-store.service.ts.service';
import { HttpService } from './services/interceptors/http.service';
import { AuthGuardService } from './guards/auth.guard';

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

//Calendario
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import  { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { CustomDateAdapter } from './services/auxiliar/custom-date-adapter';

//Tablas
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ModalUsuarioComponent } from './components/usuarios/modal-usuario/modal-usuario.component';
import { DietasUsuariosComponent } from './components/dietas-usuarios/dietas-usuarios.component';
import { ModalDietasUsuarioComponent } from './components/dietas-usuarios/modal-dietas-usuario/modal-dietas-usuario.component';
import { ModalAddMealComponent } from './components/diets/modal-add-meal/modal-add-meal.component';
import { DietsComponent } from './components/diets/diets.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    SideBarComponent,     
    MealsComponent,
    ListaCompraComponent,
    PerfilComponent,    
    ContactoComponent,
    UsuariosComponent,
    ModalUsuarioComponent,
    DietasUsuariosComponent,
    ModalDietasUsuarioComponent,
    ModalAddMealComponent,
    DietsComponent,       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatIconModule,   
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    MatDialogModule,
    AdminStoreService,
    userStoreService,
    { provide: DateAdapter, useClass: CustomDateAdapter },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpService,
      multi: true
    },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
