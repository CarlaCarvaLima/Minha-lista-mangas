import { NgModule } from '@angular/core';
import { MangasComponent } from './mangas/mangas.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'mangas', pathMatch: 'full' },

  { path: 'mangas', component: MangasComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
