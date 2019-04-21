import { Component, OnInit } from '@angular/core';
import { UploadImagenService } from 'src/app/common/services/upload-imagen.service';
import { Vendedores } from 'src/app/common/clases/vendedores';
import { VendedoresService } from 'src/app/common/services/vendedores.service';
import { ObjetoImg } from 'src/app/common/clases/objetoImg';
import { ImgPerfilService } from 'src/app/common/services/img-perfil.service';
import { ImgPerfil } from 'src/app/common/clases/img-perfil';
import { ModalConfirmacionService } from 'src/app/common/services/modal-confirmacion.service';
import { MatSnackBar } from '@angular/material';
import { AdministradorService } from 'src/app/common/services/administrador.service';
import { HistoricoAdminVendedor } from 'src/app/common/clases/historiciAdminVendedor';

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
  cargando: boolean;

   //Variable que verifica si se necesita campo comentario o no
  esEditar: boolean;

  //Variable para el comentario que se guardara en el historico
  comentario: string;

  constructor(private uploadImgService: UploadImagenService, 
    private vendedoresService: VendedoresService,
    private imgPerfilService: ImgPerfilService,
    private modalConfirmService: ModalConfirmacionService,
    private snackBar: MatSnackBar,
    private adminService: AdministradorService) { 

    this.objImagen = new ObjetoImg();
    this.imgPerfilNueva = false;
    this.cargando = false;
    this.esEditar = false;

  }

  ngOnInit() {
    this.detalleVendedor = this.vendedoresService.getDetalleVendedor();
    this.vendedoresService.setDetalleVendedor(undefined);

    if(this.detalleVendedor === undefined){
      this.esEditar = false;
      this.nuevoVendedor = new Vendedores();
      this.nuevoVendedor.historicoVendedor = new HistoricoAdminVendedor(); 
    }else{
      this.esEditar = true;
      this.nuevoVendedor = this.detalleVendedor;
      this.nuevoVendedor.historicoVendedor = new HistoricoAdminVendedor(); 
    }
    console.log("Detalle desde insertar", this.detalleVendedor);
    console.log("Es editar", this.esEditar);
  

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

   guardar(){

    this.modalConfirmService.openConfirmDialog('¿Esta seguro que desea guardar los cambios?') 
      .afterClosed().subscribe(res => {

        if(res){

          this.cargando = true;
          //Es un nuevo vendedor
          if(this.detalleVendedor === undefined){
            
            console.log("entre")
            this.nuevoVendedor.fechaIngreso = new Date();
            this.nuevoVendedor.idAdministrador = this.adminService.getAdministrador().idAdministrador;
      
            if(this.imgPerfilNueva){
              this.uploadImg(this.nuevoVendedor);
            }else{
              this.guardarVendedorNuevo();
            }
      
      
          }else if(this.detalleVendedor !== undefined){
      
            if(this.imgPerfilNueva){
              this.uploadImg(this.nuevoVendedor);
            }else{
              this.actualizarVendedor();
            }
      
          }

        }

      })
    

  }

  uploadImg( vendedor ){
    console.log("vendedor",vendedor)
    this.objImagen.idImg = Math.random().toString(36).substring(2);
    this.objImagen.nombre = `${vendedor.primerNombre}_${vendedor.primerApellido}`;
    this.objImagen.filePath = `uploads/vendedor/${this.objImagen.nombre}/profile_${this.objImagen.nombre}`;

    this.uploadImgService.uploadImagen( this.objImagen ).subscribe(async res =>{
      console.log(res);
       this.urlImg = await res;
       this.guardarImgPerfil(this.urlImg);
    });
  }

  guardarImgPerfil(url: string){
    
    let imgPerfilNueva = new ImgPerfil();
    imgPerfilNueva.url = url;
    console.log("imgPerfilNueva", imgPerfilNueva);

    this.imgPerfilService.guardarNuevaImgPerfil(imgPerfilNueva).subscribe(res => {
      console.log(res);
      let idImg = res.idImgPerfil;
      if(this.detalleVendedor === undefined){
        this.guardarVendedorNuevo(idImg);
      }else if(this.detalleVendedor !== undefined){
        this.actualizarVendedor(idImg)
      }
      
      
    })

  }

  guardarVendedorNuevo(idImg?: number){

    this.nuevoVendedor.idImgPerfil = idImg;
    this.vendedoresService.guardarNuevoVendedor(this.nuevoVendedor)
      .subscribe( res =>{
        console.log(res);
      },
      (err) => console.log(err),
      () => {
        this.cargando = false;
        this.snackBar.open('Cambios guardados exitosamente', 'Ok');
        this.esEditar = false;
      })

  }

  actualizarVendedor(idImg?: number){

    if(idImg !== undefined){
      this.nuevoVendedor.idImgPerfil = idImg;
    }
    this.nuevoVendedor.historicoVendedor.fechaMovimiento = new Date();
    this.nuevoVendedor.historicoVendedor.movimiento = "Actualizar";
    this.nuevoVendedor.historicoVendedor.idVendedor = this.detalleVendedor.idVendedor;
    this.nuevoVendedor.historicoVendedor.idAdministrador = this.adminService.getAdministrador().idAdministrador;
    this.nuevoVendedor.historicoVendedor.cambioRealizado = this.comentario;
    console.log("nuevoVendedor",this.nuevoVendedor);
    this.vendedoresService.actualizarVendedor(this.nuevoVendedor).subscribe(res => {
      console.log("actualizado", res);
    },
    (err) => console.log(err),
    () => {
      this.cargando = false;
      this.snackBar.open('Cambios guardados exitosamente', 'Ok');
      this.esEditar = false;
    })

  }

}
