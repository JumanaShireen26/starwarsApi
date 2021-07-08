import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes =[
  { path: "", component: MainComponent, data:{ title :"Star Wars Explorer"}},
  { path: "people", loadChildren: () => import(`./people/people.module`).then(m => m.PeopleModule),data:{ title :"People"} },
  { path: "planets", loadChildren: () => import(`./planet/planet.module`).then(m => m.PlanetModule),data:{ title :"Planets"} },
  { path: "films", loadChildren: () => import(`./movies/movie.module`).then(m => m.MovieModule),data:{ title :"Movies"} }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
