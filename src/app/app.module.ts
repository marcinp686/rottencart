import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { CategoriesFilterComponent } from './components/categories-filter/categories-filter.component';
import { HomeComponent } from './components/home/home.component';
import { StoresFilterComponent } from './components/stores-filter/stores-filter.component';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';

@NgModule({
  declarations: [AppComponent, CategoriesFilterComponent, HomeComponent, StoresFilterComponent, PriceFilterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CollapseModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
