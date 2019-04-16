import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'app-modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.css']
})
export class ModalConfirmacionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public date) { }

  ngOnInit() {
  }

}
