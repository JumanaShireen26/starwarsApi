import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleListComponent } from './people-list/people-list.component';


const routes: Routes = [
 { path: "", component:PeopleListComponent, data:{ title :"People"}},
 { path: "person", component:PeopleDetailsComponent, data:{ title :"People"}},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
