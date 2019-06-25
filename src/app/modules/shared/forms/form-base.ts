import { AbstractControl, ValidatorFn } from '@angular/forms';


export class FormBase<T> {
  value?: any;
  key?: string;
  label?: string;
  required?: boolean;
  order?: number;
  controlType?: string;
  disabled?: boolean;
  childFields?: FormBase<T>[];
  hoh?: string;
  selectValues?: any[];
  hidden?: boolean;
  parentKey?: string;
  childKeys?: string[];
  placeholder?: string;
  validators?: ValidatorFn[];
  formFieldConfig?: FormFieldConfig;

  constructor(options: {
    value?: any,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string,
    disabled?: boolean,
    childFields?: FormBase<T>[],
    hoh?: string,
    selectValues?: [];
    hidden?: boolean;
    parentKey?: string;
    childKeys?: string[];
    placeholde?: string;
    validators?: ValidatorFn[];
    formFieldConfig?: FormFieldConfig;

  } = {}) {
    this.value = options.value || null;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.disabled = options.disabled;
    this.childFields = options.childFields || null;
    this.hoh = options.hoh || '';
    this.selectValues = options.selectValues || null;
    this.hidden = options.hidden || false
    this.parentKey = options.parentKey || null;
    this.childKeys = options.childKeys || null
    this.placeholder = options.placeholde || null;
    this.validators = options.validators || null;
    this.formFieldConfig = options.formFieldConfig || null;
  }
}

export class ValidationRules{
  maxLength: number;
  minLength: number;
}

export class QuestionMessage{
  message: string;
  show: boolean;
}

export class FormFieldConfig {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width || null;
    this.height = height || 100
  }
}