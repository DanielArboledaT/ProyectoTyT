import { Component, OnInit } from '@angular/core';
import { VendedoresService } from 'src/app/common/services/vendedores.service';
import { Vendedores } from 'src/app/common/clases/vendedores';
import { AngularFireStorage} from '@angular/fire/storage';
import { ObjetoImg } from 'src/app/common/clases/objetoImg';
import { UploadImagenService } from 'src/app/common/services/upload-imagen.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalleVendedor: Vendedores;
  objImagen: ObjetoImg;
  imagenAgregada: boolean;
  imagenPerfil;

  constructor(private vendedoresService: VendedoresService, 
    private uploadImgService: UploadImagenService) { 
    this.objImagen = new ObjetoImg();
    this.imagenAgregada = false;
    this.imagenPerfil = "../../assets/img/perfil.jpg";
  }

  ngOnInit() {
    this.detalleVendedor = this.vendedoresService.getDetalleVendedor();
    console.log("detalleVendedor", this.detalleVendedor);
  }

  fileChange(e){
    this.imagenAgregada = true;

    let fileUpload = e.target.files.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imagenPerfil = event.target.result;
    }

    reader.readAsDataURL(fileUpload);
    
    this.objImagen.file =  e.target.files[0];
    this.objImagen.idImg = Math.random().toString(36).substring(2);
    this.objImagen.nombre = `${this.detalleVendedor.primerNombre}_${this.detalleVendedor.primerApellido}`;
    this.objImagen.filePath = `uploads/vendedor/${this.objImagen.nombre}/profile_${this.objImagen.nombre}`;

  }

  upload(){
    this.uploadImgService.uploadImagen( this.objImagen ).subscribe(res =>{
      console.log("Url imagen ****",res);
    },
    err => console.log(err), 
    () => {
      this.imagenAgregada = false;
    });
  }

  limpiar(){
    this.objImagen = new ObjetoImg();
    this.imagenAgregada = false;
    this.imagenPerfil = "../../assets/img/perfil.jpg";
  }

}
