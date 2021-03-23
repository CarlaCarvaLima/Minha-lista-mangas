import { NgModule } from '@angular/core';
import { MangasComponent } from './mangas/mangas.component';
import { Routes, RouterModule } from '@angular/router';
import { MangaEditComponent } from './edit/manga-edit/manga-edit.component';
import { MangaDeleteComponent } from './delete/manga-delete/manga-delete.component';
import { MangaListComponent } from './list/manga-list/manga-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'mangas', pathMatch: 'full' },

  { path: 'mangas', component: MangasComponent },
  { path: 'manga-edit/:id', component: MangaEditComponent },
  { path: 'manga-delete/:id', component: MangaDeleteComponent },
  { path: 'manga-titulo/:titulo', component:MangaListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
