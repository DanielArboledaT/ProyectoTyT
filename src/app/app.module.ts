import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AuthService } from 'src/app/common/services/auth.service';

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
import { AdministradoresComponent } from './administradores/administradores.component';
import { DetalleAdministradorComponent } from './administradores/detalle-administrador/detalle-administrador.component';
import { HistoricoAdminClienteComponent } from './administradores/detalle-administrador/historico-admin-cliente/historico-admin-cliente.component';

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
    ModalConfirmacionComponent,
    AdministradoresComponent,
    DetalleAdministradorComponent,
    HistoricoAdminClienteComponent
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
    MatSnackBarModule,
    MatTooltipModule,
    MatExpansionModule
  ],
  providers: [
    AuthService
  ],
  entryComponents: [
    ModalConfirmacionComponent
  ],
  exports: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
