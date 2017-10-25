import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

//import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from "../scm-main/page-not-found/page-not-found.component";
import { MainDashboardComponent} from "../scm-main/main-dashboard/main-dashboard.component";

const routes: Routes = [
  { path: 'total-summary', canActivate: [], component: MainDashboardComponent},
  { path: '', redirectTo: 'total-summary', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    //CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]})

export class AppRoutingModule { }
