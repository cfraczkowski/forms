import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './fields/multiselect/multiselect.component';
import { FormFieldsComponent } from './fields/form-fields/form-fields.component';

@NgModule({
  declarations: [
    MultiSelectComponent,
    FormFieldsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesSharedModule { }
