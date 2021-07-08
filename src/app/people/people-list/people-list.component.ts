
import { ApiService } from '../../app.services'
import { Component,  OnInit} from "@angular/core"
import {  Observable,} from "rxjs";

import { People } from '../../app.models'



@Component ({
  selector : "people-list",
  templateUrl : "people-list.component.html",
  styleUrls : ["people-list.component.scss"]
})

export class PeopleListComponent implements OnInit  {

  loadedPeoples$ :Observable<People[]>;
   page =1

  constructor(private ApiService: ApiService){}

  ngOnInit(){

  this.loadedPeoples$ = this.ApiService.getPeople(this.page);


  }
  nextpage(){
    if(this.page <9 ){
    this.page =this.page+1;
    this.loadedPeoples$ = this.ApiService.getPeople(this.page);
    }
  }

  previouspage(){
    if(this.page >0 ) {
    this.page =this.page-1;
    this.loadedPeoples$ = this.ApiService.getPeople(this.page);
    }
  }

}
