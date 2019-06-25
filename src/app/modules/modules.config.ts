import { Injectable } from '@angular/core';
import { FormBase, FormFieldConfig } from './shared/forms/form-base';
import { antigenConfig, AntigenConfig } from './shared/models/antigen.models';
import { controlTypes } from './shared/fields/fields.model';
import { Validators } from '@angular/forms';

export interface IModulesConfigService{
    getAntigenConfig();
    getProjectConfig();
}

@Injectable({
    providedIn: 'root',
  })
export class ModulesConfigService implements IModulesConfigService {

    constructor() { }

   getAntigenConfig(){

        let antigenForm = new AntigenConfig()
        let antigensFilterConfig: FormBase<any>[] = [
            {
                controlType: controlTypes.input,
                key: antigenConfig.antigenKeys.iD,
                label: antigenConfig.antigenLabels.iD,
                order: 1,
                required: false,
                disabled: false,
                hidden: true,
                
            },
            {
                controlType: controlTypes.input,
                key: antigenConfig.antigenKeys.ag,
                label: antigenConfig.antigenLabels.ag,
                order: 1,
                required: false,
                disabled: false
            },
            {
                controlType: controlTypes.input,
                key: antigenConfig.antigenKeys.accNo,
                label: antigenConfig.antigenLabels.accNo,
                order: 1,
                required: false,
                disabled: false
            },
        ]

        let antigensConfig:  FormBase<any>[] = [
            {
                controlType: controlTypes.input,
                key: antigenConfig.antigenKeys.iD,
                label: antigenConfig.antigenLabels.iD,
                order: 1,
                required: false,
                disabled: false,
                formFieldConfig: {width: 20, height: 20}
            },
            {
                controlType: controlTypes.input,
                key: antigenConfig.antigenKeys.ag,
                label: antigenConfig.antigenLabels.ag,
                order: 1,
                required: true,
                disabled: true,
                formFieldConfig: {width: 40, height: 20}
            },
            {
                controlType: controlTypes.textArea,
                key: antigenConfig.antigenKeys.accNo,
                label: antigenConfig.antigenLabels.accNo,
                order: 1,
                required: true,
                disabled: false,
                validators: [Validators.required, Validators.minLength(2)],
                formFieldConfig: {width: 100, height: 20}
            },
        ]

        antigenForm.filterConfig = antigensFilterConfig;
        antigenForm.formConfig = antigensConfig;

        return antigenForm
    }

    getProjectConfig(){

    }

}