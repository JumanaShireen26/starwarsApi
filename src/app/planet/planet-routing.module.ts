import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetDetailComponent } from './planet-detail-component/planet-detail-component.component';
import { PlanetListComponent } from './planet-list-component/planet-list-component.component';


const routes: Routes = [
  { path: "", component:PlanetListComponent, data:{ title :"Planets"}},
  { path: "planet", component:PlanetDetailComponent, data:{ title :"Planets"}},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetRoutingModule { }
