import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MangasModel } from 'src/app/model/MangasModel';
import { AlertsService } from 'src/app/service/alerts.service';
import { MangasService } from 'src/app/service/mangas.service';

@Component({
  selector: 'app-manga-edit',
  templateUrl: './manga-edit.component.html',
  styleUrls: ['./manga-edit.component.css']
})
export class MangaEditComponent implements OnInit {
  manga: MangasModel = new MangasModel()

  constructor(
    private mangasService : MangasService,
    private route : ActivatedRoute,
    private router : Router,
    private alert : AlertsService
  ){}  

  ngOnInit() {
    window.scroll(0,0)

    let id = this.route.snapshot.params['id']
    this.findByIdManga(id)
  }

  findByIdManga(id : number){
    this.mangasService.getByIdManga(id).subscribe((resp: MangasModel) => {
      this.manga = resp
    })
  }

  atualizar(){
    this.mangasService.putManga(this.manga).subscribe((resp: MangasModel) => {
      this.manga = resp
      this.alert.showAlertSuccess('Mangá atualizado com sucesso!')
      this.router.navigate(['/mangas'])
    })
  }
}
