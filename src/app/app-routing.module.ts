import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CitasComponent } from './componentes/citas/citas.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { TratamientosComponent } from './componentes/tratamientos/tratamientos.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { AdministrarCitasComponent } from './componentes/administrar-citas/administrar-citas.component';
import { AdministrarTratamientosComponent } from './componentes/administrar-tratamientos/administrar-tratamientos.component';
import { PagarComponent } from './componentes/pagar/pagar.component';
import { AdministrarUsuariosComponent } from './componentes/administrar-usuarios/administrar-usuarios.component';

const routes: Routes = [
  {path:"",component:HomeComponent, pathMatch:"full"},
  {path:"citas",component:CitasComponent, pathMatch:"full"},
  {path:"contactenos",component:ContactenosComponent, pathMatch:"full"},
  {path:"footer",component:FooterComponent, pathMatch:"full"},
  {path:"header",component:HeaderComponent, pathMatch:"full"},
  {path:"home",component:HomeComponent, pathMatch:"full"},
  {path:"login",component:LoginComponent, pathMatch:"full"},
  {path:"nosotros",component:NosotrosComponent, pathMatch:"full"},
  {path:"registro",component:RegistroComponent, pathMatch:"full"},
  {path:"tratamientos",component:TratamientosComponent, pathMatch:"full"},
  {path:"dashboard",component:DashboardComponent,pathMatch:"full"},
  {path:"usuarios",component:UsuariosComponent,pathMatch:"full"},
  {path:"administrar-citas",component:AdministrarCitasComponent,pathMatch:"full"},
  {path:"administrar-tratamientos",component:AdministrarTratamientosComponent,pathMatch:"full"},
  {path:"pagar",component:PagarComponent, pathMatch:"full"},
  {path:"administrar-usuarios",component:AdministrarUsuariosComponent,pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
