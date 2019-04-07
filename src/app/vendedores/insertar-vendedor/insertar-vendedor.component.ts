import { Component, OnInit } from '@angular/core';
import { ObjetoImg } from 'src/app/common/clases/objetoImg';
import { UploadImagenService } from 'src/app/common/services/upload-imagen.service';
import { Vendedores } from 'src/app/common/clases/vendedores';
import { VendedoresService } from 'src/app/common/services/vendedores.service';

@Component({
  selector: 'app-insertar-vendedor',
  templateUrl: './insertar-vendedor.component.html',
  styleUrls: ['./insertar-vendedor.component.css']
})
export class InsertarVendedorComponent implements OnInit {

  objImagen: ObjetoImg;
  imagenAgregada: boolean;
  imagenPerfil;
  detalleVendedor: Vendedores;

  constructor(private uploadImgService: UploadImagenService, 
    private vendedoresService: VendedoresService) { 

    this.objImagen = new ObjetoImg();
    this.imagenAgregada = false;
    this.imagenPerfil = "../../assets/img/user.png";

  }

  ngOnInit() {
    this.detalleVendedor = this.vendedoresService.getDetalleVendedor();
    this.vendedoresService.setDetalleVendedor(new Vendedores());
    console.log("Detalle desde insertar", this.detalleVendedor);
  }

  fileChange(e){
    this.imagenAgregada = true;

    let fileUpload = e.target.files.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imagenPerfil = event.target.result;
    }

    reader.readAsDataURL(fileUpload);

  }

  limpiar(){
    this.objImagen = new ObjetoImg();
    this.imagenAgregada = false;
    this.imagenPerfil = "../../assets/img/user.png";
  }

}
