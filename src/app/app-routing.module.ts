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
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { AdministrarCitasComponent } from './componentes/administrar-citas/administrar-citas.component';
import { AdministrarTratamientosComponent } from './componentes/administrar-tratamientos/administrar-tratamientos.component';
import { PagarComponent } from './componentes/pagar/pagar.component';
import { AdministrarUsuariosComponent } from './componentes/administrar-usuarios/administrar-usuarios.component';
import { UserMenuComponent } from './componentes/user-menu/user-menu.component';
import { UserMenuAgendarCitasComponent } from './componentes/user-menu-agendar-citas/user-menu-agendar-citas.component';
import { UserMenuMisCitasComponent } from './componentes/user-menu-mis-citas/user-menu-mis-citas.component';
import { UserMenuMisDatosComponent } from './componentes/user-menu-mis-datos/user-menu-mis-datos.component';
import { MenuDashboardComponent } from './componentes/menu-dashboard/menu-dashboard.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { AgendarCitasComponent} from './componentes/agendar-citas/agendar-citas.component';
import { MisCitasComponent } from './componentes/mis-citas/mis-citas.component';

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
  {path:"menu-dashboard",component:MenuDashboardComponent,pathMatch:"full"},
  {path:"usuarios",component:UsuariosComponent,pathMatch:"full"},
  {path:"administrar-citas",component:AdministrarCitasComponent,pathMatch:"full"},
  {path:"administrar-tratamientos",component:AdministrarTratamientosComponent,pathMatch:"full"},
  {path:"pagar",component:PagarComponent, pathMatch:"full"},
  {path:"user-menu",component:UserMenuComponent,pathMatch:"full"},
  {path:"user-menu-agendar-citas",component:UserMenuAgendarCitasComponent,pathMatch:"full"},
  {path:"user-menu-mis-citas",component:UserMenuMisCitasComponent,pathMatch:"full"},
  {path:"user-menu-mis-datos",component:UserMenuMisDatosComponent,pathMatch:"full"},
  {path:"administrar-usuarios",component:AdministrarUsuariosComponent,pathMatch:"full"},
  {path:"dashboard",component:DashboardComponent,pathMatch:"full"},
  {path:"agendar-citas",component:AgendarCitasComponent,pathMatch:"full"},
  {path:"mis-citas",component:MisCitasComponent,pathMatch:"full"},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
