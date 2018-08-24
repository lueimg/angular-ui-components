import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
    selector: 'styleguide-form-radiobutton',
    templateUrl: './form-radiobuton.component.html',
})
export class StyleguideFormRadioButonComponent implements OnInit {

    example2Ctr: FormControl;
    example1 = '';

    example2Form: FormGroup;

    constructor ( private fb: FormBuilder) {

    }

      ngOnInit() {
          this.example2Form = this.fb.group({
              example2: ''
          });

          this.example2Ctr = this.example2Form.get('example2') as FormControl;
      }

      setRadio (value: string) {
        this.example2Ctr.setValue(value);
      }
}
