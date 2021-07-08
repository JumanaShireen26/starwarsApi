import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from 'src/app/app.models';
import { ApiService } from '../../app.services'

@Component({
  selector: 'app-planet-list-component',
  templateUrl: './planet-list-component.component.html',
  styleUrls: ['./planet-list-component.component.scss']
})
export class PlanetListComponent implements OnInit {


  loadedPlanets$: Observable<Planet[]>;
  page =1;
  constructor(public ApiService: ApiService ) {}
  ngOnInit() {
    this.loadedPlanets$ = this.ApiService.getPlanets(this.page);
  }

  nextpage(){
    if(this.page <6 ){
    this.page =this.page+1;
    this.loadedPlanets$ = this.ApiService.getPlanets(this.page);
    }
  }

  previouspage(){
    if(this.page > 1 ) {
    this.page =this.page-1;
    this.loadedPlanets$ = this.ApiService.getPlanets(this.page);
    }
  }

}
