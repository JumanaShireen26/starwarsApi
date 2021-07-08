
import { Component } from "@angular/core";
import { ApiService } from '../../app.services';
import { Observable } from "rxjs";
import { ActivatedRoute, Params } from "@angular/router";
import { stringify } from "@angular/compiler/src/util";

@Component ({
  selector : "people-list",
  templateUrl : "people-details.component.html",
  styleUrls : ["people-details.component.scss" ]
})

export class PeopleDetailsComponent {

    public loadedPerson$: Observable<any> = null;
    constructor(public ApiService: ApiService, private activatedRoute: ActivatedRoute) {}
    ngOnInit() {
       let url :string;
      this.activatedRoute.queryParams.subscribe(params => {
         url =  params['url'];
      });

      this.loadedPerson$ =this.ApiService.getPeopleById(url);
    }
}
