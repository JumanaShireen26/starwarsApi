import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from "../angular-material.module";

import { RouterModule } from "@angular/router";

import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MovieRoutingModule } from "./movie-routing.module";

@NgModule({
  declarations: [MovieListComponent, MovieDetailsComponent],
  imports: [
    AngularMaterialModule,
    CommonModule,
    RouterModule,
    MovieRoutingModule
  ]

})
export class MovieModule {}
