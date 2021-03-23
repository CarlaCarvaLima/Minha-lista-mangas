import { Component, OnInit } from '@angular/core';
import { MangasModel } from '../model/MangasModel';
import { MangasService } from '../service/mangas.service';


@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.css']
})
export class MangasComponent implements OnInit {

  manga: MangasModel = new MangasModel()
  listaManga: MangasModel[]
  idManga: number

  constructor(
    private mangasService: MangasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.getAllManga()
  }

   getAllManga(){
    this.mangasService.getAllManga().subscribe((resp: MangasModel[]) => {
      this.listaManga = resp
     })
  }

  publicar(){
    this.manga.id = this.idManga

    this.mangasService.postManga(this.manga).subscribe((resp: MangasModel) => {
      this.manga = resp
      alert('Mangá cadastrado com sucesso!')
      this.manga = new MangasModel()
      this.getAllManga()
    })
  }

}
