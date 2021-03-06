import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(){
  }

  paginaPesquisa(){
    this.router.navigate(['/manga-titulo'])    
  }
}
