import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
import { VendedoresComponent } from 'src/app/vendedores/vendedores.component';
import { NotificacionesComponent } from 'src/app/notificaciones/notificaciones.component';
import { DetalleComponent } from 'src/app/vendedores/detalle/detalle.component';
import { InsertarVendedorComponent } from 'src/app/vendedores/insertar-vendedor/insertar-vendedor.component';
import { ClientesComponent } from 'src/app/clientes/clientes.component';
import { InsertarClienteComponent } from 'src/app/clientes/insertar-cliente/insertar-cliente.component';
import { AdministradoresComponent } from 'src/app/administradores/administradores.component';
import { AuthService } from 'src/app/common/services/auth.service';

const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {
    path: 'home', 
    component: HomeComponent,
    canActivate: [AuthService],
    children : [
      {path: 'vendedores', component: VendedoresComponent},
      {path: 'vendedores/detalle', component: DetalleComponent},
      {path: 'vendedores/insertar', component: InsertarVendedorComponent},
      {path: 'notificaciones', component: NotificacionesComponent},
      {path: 'clientes', component: ClientesComponent},
      {path: 'clientes/insertar', component: InsertarClienteComponent},
      {path: 'administradores', component: AdministradoresComponent},
    ]

  },
  {path: '**' , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
