import { Component, OnInit } from '@angular/core';
import { MangasModel } from '../model/MangasModel';
import { MangasService } from '../service/mangas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  manga: MangasModel = new MangasModel()
  tituloManga: string
  listaManga: MangasModel[]

  constructor(
    private mangasService: MangasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  getAllManga(){
    this.mangasService.getAllManga().subscribe((resp: MangasModel[]) => {
      this.listaManga = resp
     })
  }

  findByTituloManga(){
    if(this.tituloManga == ''){
      this.getAllManga()
    } else {
      this.mangasService.getByTituloManga(this.tituloManga).subscribe((resp: MangasModel[]) => {
        this.listaManga = resp
      })
    }
  }
}
