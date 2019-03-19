import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
import { VendedoresComponent } from 'src/app/vendedores/vendedores.component';
import { NotificacionesComponent } from 'src/app/notificaciones/notificaciones.component';

const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {
    path: 'home', 
    component: HomeComponent,
    
    children : [
      {path: 'vendedores', component: VendedoresComponent},
      {path: 'notificaciones', component: NotificacionesComponent}
    ]

  },
  {path: '**' , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
