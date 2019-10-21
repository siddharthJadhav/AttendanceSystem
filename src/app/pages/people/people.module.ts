import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';

const routes: Routes = [
  {
    path: 'people',
    children: [
      {
        path: '',
        component: PeopleListComponent
      },
      {
        path: 'list',
        component: PeopleListComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    PeopleListComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleModule { }
