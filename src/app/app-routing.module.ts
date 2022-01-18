import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DivisionComponent } from './division/division.component';
import { AddDivisionComponent } from './action/add-division/add-division.component';
import { EditDivisionComponent } from './action/edit-division/edit-division.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "divisi", component: DivisionComponent},
  {path: "divisions-add", component: AddDivisionComponent},
  {path: "divisions-edit",
    children: [
      { 
        path : ':id/edit',
        component: EditDivisionComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
