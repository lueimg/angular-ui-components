import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'styleguide-form-text-input',
    templateUrl: './form-textarea.component.html',
    styleUrls: ['./form-textarea.component.scss']
})
export class StyleguideFormTextareaComponent implements OnInit {
    demoForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.demoForm = this.formBuilder.group({
            firstInput: [''],
            secondInput: [''],
            thirdInput: ['']
        });
    }
}
