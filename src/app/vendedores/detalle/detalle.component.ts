import { Component, OnInit } from '@angular/core';
import { VendedoresService } from 'src/app/common/services/vendedores.service';
import { Vendedores } from 'src/app/common/clases/vendedores';
import { AngularFireStorage} from '@angular/fire/storage';
import { ObjetoImg } from 'src/app/common/clases/objetoImg';
import { UploadImagenService } from 'src/app/common/services/upload-imagen.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalleVendedor: Vendedores;


  constructor(private vendedoresService: VendedoresService,
    private router : Router) { 
  }

  ngOnInit() {
    this.detalleVendedor = this.vendedoresService.getDetalleVendedor();
    console.log("detalleVendedor", this.detalleVendedor);
  }


  editarVendedor(){
    this.vendedoresService.setDetalleVendedor(this.detalleVendedor);
    this.router.navigate(['home/vendedores/insertar']);
  }

}
