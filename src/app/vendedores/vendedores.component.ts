import { Component, OnInit } from '@angular/core';
import { VendedoresService } from 'src/app/common/services/vendedores.service';
import { Vendedores } from 'src/app/common/clases/vendedores';
import { Router } from '@angular/router';
import { ModalConfirmacionService } from 'src/app/common/services/modal-confirmacion.service';
import { MatSnackBar } from '@angular/material';
import { AdministradorService } from 'src/app/common/services/administrador.service';
import { HistoricoAdminVendedor } from 'src/app/common/clases/historiciAdminVendedor';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {

  cargandoVendedores: boolean;
  vendedores: Vendedores[];
  insertarVendedor: boolean;
  

  constructor(private vendedoresService: VendedoresService,
    private router : Router,
    private modalConfirmService: ModalConfirmacionService,
    private snackBar: MatSnackBar,
    private adminService: AdministradorService) {

    this.cargandoVendedores = true;
    this.insertarVendedor = false;

  }


  ngOnInit() {

    this.consultarVendedores();

  }

  consultarVendedores(){

    this.vendedoresService.consultarVendedores().subscribe(res => {
      this.vendedores = res;
      console.log(res);
    },
    err => console.log(err),
    () => {
      this.cargandoVendedores = false;
    })

  }

  verDetalle( vendedor: Vendedores ){

    this.vendedoresService.setDetalleVendedor(vendedor);
    this.router.navigate(['home/vendedores/detalle']);

  }

  InsertarVendedor(){

    this.router.navigate(['home/vendedores/insertar']);
  }

  cambiarEstado(vendedor: Vendedores){
    vendedor.historicoVendedor = new HistoricoAdminVendedor();
    let mensaje;
    if(vendedor.estado === 'I'){
      mensaje = '¿Esta seguro que desea activar el estado del vendedor?';
    }else{
      mensaje = '¿Esta seguro que desea inactivar el estado del vendedor?';
    }

    this.modalConfirmService.openConfirmDialog(mensaje, true) 
      .afterClosed().subscribe(res => {

        if(res){
          vendedor.historicoVendedor.cambioRealizado = this.vendedoresService.getComentario();
          vendedor.historicoVendedor.fechaMovimiento = new Date();
          vendedor.historicoVendedor.idAdministrador = this.adminService.getAdministrador().idAdministrador;
          vendedor.historicoVendedor.idVendedor = vendedor.idVendedor;
          if(vendedor.estado === 'I'){
            vendedor.historicoVendedor.movimiento = "Activar";
          }else{
            vendedor.historicoVendedor.movimiento = "Desactivar";
          }
          this.cargandoVendedores = true;
          this.vendedoresService.cambiarEstadoVendedor(vendedor).subscribe(res => {
            console.log("cambiar estado", res);
            

          },
          err => console.log(err),
          () => {

            this.consultarVendedores();
            this.cargandoVendedores = false;
            this.snackBar.open('Accion realizada exitosamente', 'Ok');

          })
        }

      })

  }

}
