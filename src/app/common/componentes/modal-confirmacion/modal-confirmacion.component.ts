import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { VendedoresService } from 'src//app/common/services/vendedores.service';

@Component({
  selector: 'app-modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.css']
})
export class ModalConfirmacionComponent implements OnInit {

  comentario: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data, 
  private vendedoresService: VendedoresService,
  private dialogRef: MatDialogRef<ModalConfirmacionComponent>) { }

  ngOnInit() {
  }

  confirmModal(){
    this.vendedoresService.setComentario(this.comentario);
    this.dialogRef.close(true);
  }

}
