import { Component, Input } from '@angular/core';
import { SharedImagesDataService } from 'src/app/services/shared-images-data.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  @Input() buttonText: string = "";
  constructor(private sharedDataService: SharedImagesDataService) {}

  //Nombres de las imagenes subidas
  uploadedFileNames: string[] = [];
  //Bandera para saber si se subieron imagenes
  archivosSubidos: boolean = false;

  onFileSelected(event: any): void {
    //Limpio el array de imagenes y pongo en false la bandera
    this.uploadedFileNames = []
    this.sharedDataService.setImagenes([]);
    this.archivosSubidos = false
    //Obtengo los datos del evento (el archivo)
    const files: FileList = event.target.files;
    //Por cada imagen pongo su nombre en la lista para mostrar
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.size <= 5 * 1024 * 1024 && file.type === 'image/jpeg') {
        this.archivosSubidos = true
        this.uploadedFileNames.push(file.name);
      } else {
        console.warn(`El archivo ${file.name} no es una imagen JPG valida o excede el tamaño maximo de 5MB.`);
      }
    }
    if(this.uploadedFileNames.length > 0){
      this.onImagesSelected(this.uploadedFileNames);
    }
  }

  onImagesSelected(images: string[]) {
    this.sharedDataService.setImagenes(images);
  }

}
