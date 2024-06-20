import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { HttpClientModule } from '@angular/common/http';
import { UserMenuComponent } from './componentes/user-menu/user-menu.component';
import { UserMenuMisDatosComponent } from './componentes/user-menu-mis-datos/user-menu-mis-datos.component';
import { UserMenuMisCitasComponent } from './componentes/user-menu-mis-citas/user-menu-mis-citas.component';
import { UserMenuAgendarCitasComponent } from './componentes/user-menu-agendar-citas/user-menu-agendar-citas.component';
import { FormsModule } from '@angular/forms';

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
    UserMenuComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
