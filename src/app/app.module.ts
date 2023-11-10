//Components
import { BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent} from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MealsComponent } from './components/meals/meals.component';
import { ListaCompraComponent } from './components/lista-compra/lista-compra.component';

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

//Calendario
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import  { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { CustomDateAdapter } from './services/custom-date-adapter/custom-date-adapter';

//Tablas
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    NavbarComponent,     
    MealsComponent,
    ListaCompraComponent,
     
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
  ],
  providers: [
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
