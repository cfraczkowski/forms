import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBase } from './form-base';

export interface IFormControlService{
  toFormGroup(data: FormBase<any>[]);
  toFilterFormGroup(data: FormBase<any>[]);
}

@Injectable({
  providedIn: 'root'
})
export class FormControlService implements IFormControlService {
  constructor() { }

  toFormGroup(data: FormBase<any>[]) {
    let group: any = {};

    data.forEach(data => {
          group[data.key] =  new FormControl({value: data.value !== undefined ? data.value : '', disabled: data.disabled}, data.validators)
    });
    return new FormGroup(group);
  }


  toFilterFormGroup(data: FormBase<any>[]) {
    let group: any = {};

    data.forEach(data => {
      group[data.key] = new FormControl({value: data.value !== undefined ? data.value : ''}, data.validators)
    });
    return new FormGroup(group);
  }
}
