import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material'; 
import { ModalConfirmacionComponent } from 'src/app/common/componentes/modal-confirmacion/modal-confirmacion.component';

@Injectable({
  providedIn: 'root'
})
export class ModalConfirmacionService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog( msg: string, esCambiarEstado?: boolean ){

    return this.dialog.open(ModalConfirmacionComponent,{
      width: '390px',
      disableClose: true,
      data: {
        mensaje: msg,
        esCambiarEstado: esCambiarEstado
      }
    });

  }


}
