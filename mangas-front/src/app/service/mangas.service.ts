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
  return this.http.get<MangasModel[]>('http://192.168.0.6:9000/mangas')
}

getByIdManga(id: number): Observable<MangasModel> {
  return this.http.get<MangasModel>(`http://192.168.0.6:9000/mangas/${id}`)
}

getByTituloManga(titulo: string): Observable<MangasModel[]>{
  return this.http.get<MangasModel[]>(`http://192.168.0.6:9000/mangas/titulo/${titulo}`)
}

postManga(manga: MangasModel): Observable<MangasModel>{
  return this.http.post<MangasModel>('http://192.168.0.6:9000/mangas', manga)
}

putManga(manga: MangasModel): Observable<MangasModel>{
  return this.http.put<MangasModel>('http://192.168.0.6:9000/mangas', manga)
}

deleteManga(id: number) {
  return this.http.delete(`http://192.168.0.6:9000/mangas/${id}`)
}
}