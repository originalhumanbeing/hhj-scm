import { NgModule } from '@angular/core';
import { ProductManagementComponent } from "../product/product-management/product-management.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: 'product-list', component: ProductManagementComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
