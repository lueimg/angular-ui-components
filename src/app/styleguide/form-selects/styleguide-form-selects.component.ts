import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SelectOption } from '../../libs/ui-form-select/public_api';

@Component({
    selector: 'styleguide-form-selects',
    templateUrl: './styleguide-form-selects.component.html',
})
export class StyleguideFormSelectsComponent implements OnInit {

    myForm: FormGroup;
    selectOptions: SelectOption[] = [
        { name: 'Please Select', value: '' },
        {
            name: 'I am a very long option.  Why do I have so much to say?',
            value: 'secret value'
        },
        { name: 'Option 2' },
        { name: 'Option 3' },
        { name: 'Option 4' },
        { name: 'Option 5' },
    ];

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.myForm = this.formBuilder.group({
            mySelect: ['']
        });
    }
}
