import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list/people',
    pathMatch: 'full'
  },
  {
    path: 'list/people',
    component: PeopleListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [],
})
export class PeopleModule { }
