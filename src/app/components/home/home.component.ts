import { ChangeDetectionStrategy } from '@angular/core';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { CategoriesFilterComponent } from '../categories-filter/categories-filter.component';
import { PriceFilterComponent } from '../price-filter/price-filter.component';
import { StoresFilterComponent } from '../stores-filter/stores-filter.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(StoresFilterComponent) storesFilterComponent! : StoresFilterComponent;
  @ViewChild(CategoriesFilterComponent) categoriesFilterComponent! : CategoriesFilterComponent;
  @ViewChild(PriceFilterComponent) priceFilterComponent! : PriceFilterComponent;

  storesFilter$!      : Observable<number[]>;
  categoriesFilter$!  : Observable<number[]>;
  priceFromFilter$!   : Observable<number | null>;
  priceToFilter$!     : Observable<number | null>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.storesFilter$ = this.storesFilterComponent.selectedStores$;
    this.categoriesFilter$ = this.categoriesFilterComponent.selectedCategories$;
    this.priceFromFilter$ = this.priceFilterComponent.priceFromFilter$;
    this.priceToFilter$ = this.priceFilterComponent.priceToFilter$;
  }

}
