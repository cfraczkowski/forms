import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { FormBase } from '../shared/forms/form-base';
import { AntigenConfig } from '../shared/models/antigen.models';
import { IModulesConfigService, ModulesConfigService } from '../modules.config';
import { IFormControlService, FormControlService } from '../shared/forms/form-control.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-antigen',
  templateUrl: './antigen.component.html',
  styleUrls: ['./antigen.component.scss']
})
export class AntigenComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  antigenConfig: AntigenConfig = new AntigenConfig();

  antigenForm: FormGroup;
  antigenFilterForm: FormGroup;

  constructor(
    private _antigenConfigService: ModulesConfigService,
    private _formControlService: FormControlService) { }

  ngOnInit() {
    this.getAntigenConfig();
    this.getFormGroups();
  }
  
  getAntigenConfig(){
    this.antigenConfig = this._antigenConfigService.getAntigenConfig();
    console.log(this.antigenConfig)
  }

  getFormGroups(){
    this.antigenFilterForm = this._formControlService.toFilterFormGroup(this.antigenConfig.filterConfig);
    this.antigenForm = this._formControlService.toFormGroup(this.antigenConfig.formConfig)
    console.log(this.antigenFilterForm)
  }

  getFormCtrl(key: string){
    return this.antigenForm.get(key);
  }

  getFilterFormCtrl(key: string){
    return this.antigenFilterForm.get(key);
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}
