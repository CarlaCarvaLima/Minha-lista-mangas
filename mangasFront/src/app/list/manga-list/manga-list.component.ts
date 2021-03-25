import { Component, OnInit } from '@angular/core';
import { MangasModel } from 'src/app/model/MangasModel';
import { MangasService } from 'src/app/service/mangas.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent implements OnInit {

  manga: MangasModel = new MangasModel()
  listaManga: MangasModel[]
  tituloManga: string

  key = 'volume'
  reverse = false

  constructor(
    private mangasService : MangasService
  ) { }

  ngOnInit() {
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
