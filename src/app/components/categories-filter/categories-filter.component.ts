import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CategoryModel } from 'src/app/models/category.model';
import { FreshCartService } from 'src/app/services/freshcart.service';

// Categories list with checkboxes

@Component({
  selector: 'app-categories-filter',
  templateUrl: './categories-filter.component.html',
  styleUrls: ['./categories-filter.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class CategoriesFilterComponent implements OnInit {

  categories$!          : Observable<CategoryModel[]>;
  categoriesFormGroup   : FormGroup = new FormGroup({});
  selectedCategories$   : BehaviorSubject<number[]> = new BehaviorSubject<number[]>([])

  constructor(private freshcart: FreshCartService) { }

  ngOnInit(): void {
    // create checkbox controls for each category
    this.categories$ = this.freshcart.getAllCategories().pipe(
      tap((categories) => {
        categories.forEach(category => {
          (this.categoriesFormGroup.addControl(
            category.id.toString(), new FormControl(false)))
        })
      })
    );

    // Emit event on change in selected categories
    this.categoriesFormGroup.valueChanges.subscribe(controls => {
      let selectedCategories: number[] = [];
      Object.keys(controls).forEach(
        key => {
          if (controls[key] === true) selectedCategories.push(Number(key))
        }
      );
      this.selectedCategories$.next(selectedCategories);
    }
    );
    
  }



}
