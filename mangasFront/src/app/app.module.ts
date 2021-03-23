import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MangasComponent } from './mangas/mangas.component';
import { FormsModule } from '@angular/forms';
import { MangaEditComponent } from './edit/manga-edit/manga-edit.component';
import { MangaDeleteComponent } from './delete/manga-delete/manga-delete.component';
import { MangaListComponent } from './list/manga-list/manga-list.component';


@NgModule({
  declarations: [
    MangasComponent,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MangaEditComponent,
    MangaDeleteComponent,
    MangaListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
