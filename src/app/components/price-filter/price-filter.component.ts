import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class PriceFilterComponent implements OnInit {

  priceFormGroup : FormGroup = new FormGroup({
    fromPrice : new FormControl(0, Validators.min(0)),
    toPrice   : new FormControl(100, Validators.min(0))
  });

  priceFromFilter$  : BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  priceToFilter$    : BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  
  constructor() { }

  ngOnInit(): void {
    this.priceFormGroup.get('fromPrice')?.valueChanges.subscribe( control => {
      if(control!=null) this.priceFromFilter$.next( control );
    })    
    this.priceFormGroup.get('toPrice')?.valueChanges.subscribe( control => {
      if(control!=null) this.priceToFilter$.next( control );
    })
  }

}
