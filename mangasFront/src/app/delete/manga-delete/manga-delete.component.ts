import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MangasModel } from 'src/app/model/MangasModel';
import { MangasService } from 'src/app/service/mangas.service';

@Component({
  selector: 'app-manga-delete',
  templateUrl: './manga-delete.component.html',
  styleUrls: ['./manga-delete.component.css']
})
export class MangaDeleteComponent implements OnInit {
  manga: MangasModel = new MangasModel()
  idManga: number

  constructor(
    private mangasService : MangasService,
    private route : ActivatedRoute,
    private router : Router
  ){}  

  ngOnInit() {
    window.scroll(0,0)

    this.idManga = this.route.snapshot.params['id']
    this.findByIdManga(this.idManga)
  }

  findByIdManga(id : number){
    this.mangasService.getByIdManga(id).subscribe((resp: MangasModel) => {
      this.manga = resp
    })
  }

  deletar(){
    this.mangasService.deleteManga(this.idManga).subscribe(()=>{
      alert('Mangá deletado com sucesso!')
      this.router.navigate(['/mangas'])
    })
  }
}
