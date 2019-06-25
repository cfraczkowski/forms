import { FormBase } from '../forms/form-base';
import { BaseFormConfig } from './base.models';

export class AntigenConfig extends BaseFormConfig {
    // constructor(
    //     tableConfig: FormBase<any>[],
    //     filterConfig: FormBase<any>[],
    //     formConfig: FormBase<any>[],) {
    //     super();
    //         this.filterConfig = filterConfig;
    //         this.tableConfig = tableConfig;
    //         this.formConfig = formConfig;
    // }
}

export const antigenKeys = {
    iD: 'iD',
    ag: 'ag',
    accNo: 'AaccNo',
    synonyms: 'synonyms',
    normFunctn: 'normFunctn',
    diseaseMech: 'diseaseMech',
    agCellLoc: 'agCellLoc',
    notes: 'notes',
} 

export const antigenLabels = {
    iD: 'Antigen ID',
    ag: 'Antigen',
    accNo: 'Accession Number',
    synonyms: 'Synonyms',
    normFunctn: 'Normal Function',
    diseaseMech: 'Disease Mechanism',
    agCellLoc: 'Antigen Cell Location',
    notes: 'Notes',
}

export const antigenConfig = {
    antigenKeys: antigenKeys,
    antigenLabels: antigenLabels,
}