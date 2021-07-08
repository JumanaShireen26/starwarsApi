import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from "../angular-material.module";
import { HttpClientModule } from "@angular/common/http";

import { RouterModule } from "@angular/router";

import { PeopleListComponent } from "./people-list/people-list.component";
import { PeopleDetailsComponent } from "./people-details/people-details.component";
import { PeopleRoutingModule } from "./people-routing.module";

@NgModule({
  declarations: [PeopleListComponent, PeopleDetailsComponent],
  imports: [
    AngularMaterialModule,
    CommonModule,
    RouterModule,
    PeopleRoutingModule,
    HttpClientModule
  ]

})
export class PeopleModule {}
