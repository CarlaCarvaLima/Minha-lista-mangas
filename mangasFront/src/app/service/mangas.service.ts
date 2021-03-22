import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MangasModel } from '../model/MangasModel';


@Injectable({
  providedIn: 'root'
})
export class MangasService {

constructor(private http: HttpClient) { }


getAllManga(): Observable<MangasModel[]> {
  return this.http.get<MangasModel[]>('http://localhost:8080/mangas')
}

postManga(manga: MangasModel): Observable<MangasModel>{
  return this.http.post<MangasModel>('http://localhost:8080/mangas', manga)
}

putManga(manga: MangasModel): Observable<MangasModel>{
  return this.http.put<MangasModel>('http://localhost:8080/mangas', manga)
}

deleteManga(id: number) {
  return this.http.delete(`http://localhost:8080/mangas/${id}`)
}
}