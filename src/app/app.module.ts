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
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
