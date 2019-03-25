import { Injectable } from '@angular/core';
import { AngularFireStorage} from '@angular/fire/storage';
import { ObjetoImg } from 'src/app/common/clases/objetoImg';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class UploadImagenService {

  urlImage : Observable<any>;

  constructor(private storage: AngularFireStorage, private db : AngularFireDatabase) { }

  uploadImagen( objetoImg : ObjetoImg ): Observable<any>{
    console.log(objetoImg);
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(objetoImg.filePath).put(objetoImg.file); 
    
    return new Observable(observer => {
      
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {

        },
        err => {
          console.log(err);
          observer.error('error');
        },
        ()=>{

          uploadTask.snapshot.ref.getDownloadURL().then(downloadUrl =>{

            this.saveFileData(objetoImg.filePath, objetoImg.file)

            observer.next(downloadUrl);
            observer.complete();
          })

        })

    }) 

  }

  saveFileData( url:string, fileUpload: File ){
    this.db.list(url).push(fileUpload);
  }

}
