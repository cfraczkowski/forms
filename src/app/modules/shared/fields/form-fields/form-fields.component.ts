import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'anaconda-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss']
})
export class FormFieldsComponent implements OnInit {
  @Input() type: string;
  @Input() placeholder: string;
  @Input() dataCtrl: FormControl = new FormControl();
  

  get isValid() { return this.dataCtrl.valid && (this.dataCtrl.dirty || this.dataCtrl.touched) }
  constructor() { }

  ngOnInit() {
  }

}
