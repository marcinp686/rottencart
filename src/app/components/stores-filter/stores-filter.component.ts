import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { StoreModel } from 'src/app/models/store.model';
import { FreshCartService } from 'src/app/services/freshcart.service';

// Stores list with checkboxes

@Component({
  selector: 'app-stores-filter',
  templateUrl: './stores-filter.component.html',
  styleUrls: ['./stores-filter.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class StoresFilterComponent implements OnInit {

  stores$!        : Observable<StoreModel[]>;
  storesFormGroup : FormGroup = new FormGroup({});
  selectedStores$ : BehaviorSubject<number[]> = new BehaviorSubject<number[]>([])

  constructor(private freshcart: FreshCartService) { }

  ngOnInit(): void {
    // create checkbox controls for each store
    this.stores$ = this.freshcart
      .getAllStores()
      .pipe(
        tap((stores) =>
          stores.forEach((store) =>
            this.storesFormGroup.addControl(
              store.id.toString(),
              new FormControl(false)
            )
          )
        )
      );
    
    // Emit event on change in selected stores
    this.storesFormGroup.valueChanges.subscribe((controls) => {
      let selectedStores: number[] = [];
      Object.keys(controls).forEach((key) => {
        if (controls[key] === true) selectedStores.push(Number(key));
      });
            
      this.selectedStores$.next(selectedStores)
    });
  }

}
