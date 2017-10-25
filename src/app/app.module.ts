import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

import { ScmMainModule } from './scm-main/scm-main.module';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /*Angular Modules*/
    BrowserModule, FormsModule, HttpModule,

    /*App Modules*/
    ScmMainModule, ProductModule, CategoryModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
