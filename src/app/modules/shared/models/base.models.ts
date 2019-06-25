import { FormBase } from '../forms/form-base';

export class BaseFormConfig{
    panelTitle: string;
    tableConfig: FormBase<any>[];
    filterConfig: FormBase<any>[];
    formConfig: FormBase<any>[];
}