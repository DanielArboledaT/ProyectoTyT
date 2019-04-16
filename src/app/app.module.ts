import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { DetalleComponent } from './vendedores/detalle/detalle.component';
import { InsertarVendedorComponent } from './vendedores/insertar-vendedor/insertar-vendedor.component';
import { ClientesComponent } from './clientes/clientes.component';
import { InsertarClienteComponent } from './clientes/insertar-cliente/insertar-cliente.component';
import { ModalConfirmacionComponent } from 'src/app/common/componentes/modal-confirmacion/modal-confirmacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    VendedoresComponent,
    NotificacionesComponent,
    DetalleComponent,
    InsertarVendedorComponent,
    ClientesComponent,
    InsertarClienteComponent,
    ModalConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    NgxChartsModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.fireBaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  entryComponents: [
    ModalConfirmacionComponent
  ],
  exports: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
