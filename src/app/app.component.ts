import { Component } from '@angular/core';
import { Imagen } from './models/imagen';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fileName = '';
  filepath:any;
  constructor(private http: HttpClient) {}

  imgs_array: Imagen[] = [
    {id:0,src:"https://wallpaperaccess.com/full/3971879.jpg"},
    {id:1,src:"https://wallpaperaccess.com/full/1347921.jpg"},
    {id:2,src:"https://wallpaperaccess.com/full/3971885.jpg"},
  ];
  new_img:Imagen = new Imagen;
  ind:string = "0";

  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {
        this.fileName = file.name;
        let reader = new FileReader();
        reader.onload = (event:any) => {
        this.filepath = event.target.result;
        console.log(this.filepath)
        }
        console.log(reader.readAsDataURL(file))
    }
}

  addImage(){
    this.imgs_array.push(this.new_img)
  }

  delImage(){
    this.imgs_array.pop()
  }

}
