import { Component, OnInit } from '@angular/core';
import { UploadImagenService } from 'src/app/common/services/upload-imagen.service';
import { Vendedores } from 'src/app/common/clases/vendedores';
import { VendedoresService } from 'src/app/common/services/vendedores.service';
import { ObjetoImg } from 'src/app/common/clases/objetoImg';

@Component({
  selector: 'app-insertar-vendedor',
  templateUrl: './insertar-vendedor.component.html',
  styleUrls: ['./insertar-vendedor.component.css']
})
export class InsertarVendedorComponent implements OnInit {

  objImagen: ObjetoImg;
  imagenPerfil;
  detalleVendedor: Vendedores;
  nuevoVendedor: Vendedores;
  imgPerfilNueva: boolean;
  private urlImg: string;

  constructor(private uploadImgService: UploadImagenService, 
    private vendedoresService: VendedoresService) { 

    this.objImagen = new ObjetoImg();
    this.imagenPerfil = "../../assets/img/user.png";
    this.imgPerfilNueva = false;

  }

  ngOnInit() {
    this.detalleVendedor = this.vendedoresService.getDetalleVendedor();
    this.vendedoresService.setDetalleVendedor(new Vendedores());
    console.log("Detalle desde insertar", this.detalleVendedor);

    if(this.detalleVendedor === undefined){
      this.nuevoVendedor = new Vendedores();
    }

  }

  fileChange(e){
    this.imgPerfilNueva = true;

    let fileUpload = e.target.files.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imagenPerfil = event.target.result;
    }

    reader.readAsDataURL(fileUpload);

    this.objImagen.file =  e.target.files[0];

  }

  limpiar(){
    this.objImagen = new ObjetoImg();
    this.imgPerfilNueva = false;
    this.imagenPerfil = "../../assets/img/user.png";
  }

  async guardar(){
    //Es un nuevo vendedor
    if(this.detalleVendedor === undefined){
      this.nuevoVendedor.fechaIngreso = new Date();
      this.nuevoVendedor.idAdministrador = 1;

      if(this.imgPerfilNueva){
        let url = await this.uploadImg(this.nuevoVendedor);
      }
      
      /*this.vendedoresService.guardarNuevoVendedor(this.nuevoVendedor)
        .subscribe( res =>{
          console.log(res);
        })*/

    }



  }

  async uploadImg( vendedor ){
    this.objImagen.idImg = Math.random().toString(36).substring(2);
    this.objImagen.nombre = `${vendedor.primerNombre}_${vendedor.primerApellido}`;
    this.objImagen.filePath = `uploads/vendedor/${this.objImagen.nombre}/profile_${this.objImagen.nombre}`;

    this.uploadImgService.uploadImagen( this.objImagen ).subscribe(res =>{
      console.log(res);
      this.urlImg = res;
    },
    err => console.log(err), 
    () => {
      this.imgPerfilNueva = false;
    });
  }

  guardarImgPerfil(){
    
  }

}
