import { NgModule } from '@angular/core';
import { CategoryManagementComponent } from "../category/category-management/category-management.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: 'category-list', component: CategoryManagementComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoryRoutingModule { }
