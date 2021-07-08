import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from "../angular-material.module";

import { RouterModule } from "@angular/router";

import { PlanetListComponent } from "./planet-list-component/planet-list-component.component";
import { PlanetDetailComponent } from "./planet-detail-component/planet-detail-component.component";
import { PlanetRoutingModule } from "./planet-routing.module";

@NgModule({
  declarations: [PlanetListComponent, PlanetDetailComponent],
  imports: [
    AngularMaterialModule,
    CommonModule,
    RouterModule,
    PlanetRoutingModule
  ]
})
export class PlanetModule {}
