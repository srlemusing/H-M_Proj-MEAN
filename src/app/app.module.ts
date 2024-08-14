
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { StoreModule } from '@ngrx/store';
import { citasReducer } from './store/citas.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { TratamientosComponent } from './componentes/tratamientos/tratamientos.component';
import { CitasComponent } from './componentes/citas/citas.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { MenuDashboardComponent } from './componentes/menu-dashboard/menu-dashboard.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { MicuentaComponent } from './componentes/micuenta/micuenta.component';
import { AdministrarCitasComponent } from './componentes/administrar-citas/administrar-citas.component';
import { AdministrarTratamientosComponent } from './componentes/administrar-tratamientos/administrar-tratamientos.component';
import { PagarComponent } from './componentes/pagar/pagar.component';
import { AdministrarUsuariosComponent } from './componentes/administrar-usuarios/administrar-usuarios.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { UserMenuComponent } from './componentes/user-menu/user-menu.component';
import { UserMenuMisDatosComponent } from './componentes/user-menu-mis-datos/user-menu-mis-datos.component';
import { UserMenuMisCitasComponent } from './componentes/user-menu-mis-citas/user-menu-mis-citas.component';
import { UserMenuAgendarCitasComponent } from './componentes/user-menu-agendar-citas/user-menu-agendar-citas.component';
import { FormsModule } from '@angular/forms';
import { InterceptorService } from './servicios/interceptor.service';
import { AgendarCitasComponent } from './componentes/agendar-citas/agendar-citas.component';
import { MisCitasComponent } from './componentes/mis-citas/mis-citas.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactenosComponent,
    TratamientosComponent,
    CitasComponent,
    NosotrosComponent,
    DashboardComponent,
    MenuDashboardComponent,
    UsuariosComponent,
    MicuentaComponent,
    AdministrarCitasComponent,
    AdministrarTratamientosComponent,
    PagarComponent,
    UserMenuComponent,
    UserMenuMisDatosComponent,
    UserMenuMisCitasComponent,
    UserMenuAgendarCitasComponent,
    AdministrarUsuariosComponent,
    UserMenuComponent,
    AgendarCitasComponent,
    MisCitasComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ citas: citasReducer }),
    EffectsModule.forRoot([]),
    ReactiveFormsModule, // Añade ReactiveFormsModule aquí
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
