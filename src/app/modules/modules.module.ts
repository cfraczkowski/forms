import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './shared/fields/multiselect/multiselect.component';
import { ModulesComponent } from './modules.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AntigenComponent } from './antigen/antigen.component';
import { ProjectComponent } from './project/project.component';
import { CoreModule } from '../core/core.module';
import { FormFieldsComponent } from './shared/fields/form-fields/form-fields.component';

@NgModule({
  declarations: [MultiSelectComponent, ModulesComponent, AntigenComponent, ProjectComponent, FormFieldsComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class ModulesModule { }
