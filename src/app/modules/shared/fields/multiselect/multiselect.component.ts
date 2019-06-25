import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { takeUntil, take } from 'rxjs/operators';

@Component({
  selector: 'anaconda-multi-select',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiSelectComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges  {

  /** list of banks */
  @Input() selectData: any[];
  
  @Input() displayName: string;
  /** control for the selected bank for multi-selection */
  @Input() dataMultiCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
  @Input() dataMultiFilterCtrl: FormControl = new FormControl();

  /** list of banks filtered by search keyword */
  public filteredDataMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  @ViewChild('multiSelect',{ static: true }) multiSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();


  constructor() { }

  ngOnInit() {
    // set initial selection
    this.dataMultiCtrl.setValue(null);
    // load the initial bank list
    this.filteredDataMulti.next(this.selectData.slice());

    // listen for search field value changes
    this.dataMultiFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterDataMulti();
      });
  }

  ngOnChanges(changes: SimpleChanges){

  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  protected setInitialValue() {
    this.filteredDataMulti
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        this.multiSelect.compareWith = (a: any, b: any) => a && b && a.value === b.value;
      });
  }

  protected filterDataMulti() {
    if (!this.selectData) {
      return;
    }
    // get the search keyword
    let search = this.dataMultiFilterCtrl.value;
    if (!search) {
      this.filteredDataMulti.next(this.selectData.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredDataMulti.next(
      this.selectData.filter(data => data.name.toLowerCase().indexOf(search) > -1)
    );
  }

}

