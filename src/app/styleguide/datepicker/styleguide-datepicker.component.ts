import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DOBValidator, CustomValidation } from '../../libs/ui-datepicker/src/validators/dob.validator';
import * as moment from 'moment';

@Component({
    selector: 'styleguide-datepicker',
    templateUrl: './styleguide-datepicker.component.html',
    styleUrls: ['./styleguide-datepicker.component.scss']
})
export class StyleguideDatepickerComponent implements OnInit {

    datepicker17: FormControl;
    datepicker16: FormControl;
    datepicker15: FormControl = new FormControl('');
    form3: FormGroup;
    datepicker14: FormControl;
    datepicker13: FormControl;
    datepicker12: FormControl;
    form2: FormGroup;
    datepicker11: FormControl;
    datepicker10: FormControl;
    datepicker9: FormControl;
    datepicker8: FormControl;
    datepicker7: FormControl;
    datepicker6: FormControl;
    form1: FormGroup;
    datepicker5: FormControl;
    datepicker4Ctrl: FormControl;
    datepicker3Ctrl: FormControl;
    datepicker2Ctrl: FormControl;
    datepickerCtrl: FormControl = new FormControl();
    myForm: FormGroup;

    datepicker12MaxDate = moment('2018-05-12');
    datepicker13MaxDate = moment('2014-05-12');

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.createForm2();
        this.createForm3();
        this.createForm1();
        this.createForm();
    }

    submitForm() {
        console.log(this.myForm.value);
    }

    createForm () {
        this.myForm = this.fb.group({
            datepicker2: ['', Validators.required], // without input
            datepicker3: ['', Validators.required], // today button
            datepicker4: ['', Validators.required], // with viewFormat
            datepicker5: ['', Validators.required], // with format
            datepicker6: ['', Validators.required], // With input Errors
            datepicker7: ['', Validators.required], // With input Errors
            datepicker8: [''], // Without input Errors
            datepicker9: [''], // Without input Errors
            datepicker10: ['', CustomValidation.validate], // with Error in Datepicker to propagate internally
            datepicker12: [''], // with Error in Datepicker to propagate internally
            datepicker13: [''], // with Error in Datepicker to propagate internally
            datepicker14: [''], // with Error in Datepicker to propagate internally
            datepicker16: [''], // with Error in Datepicker to propagate internally
            datepicker17: ['']
        });
        this.datepicker2Ctrl = this.myForm.get('datepicker2') as FormControl;
        this.datepicker4Ctrl = this.myForm.get('datepicker4') as FormControl;
        this.datepicker3Ctrl = this.myForm.get('datepicker3') as FormControl;
        this.datepicker5 = this.myForm.get('datepicker5') as FormControl;
        this.datepicker6 = this.myForm.get('datepicker6') as FormControl;
        this.datepicker7 = this.myForm.get('datepicker7') as FormControl;
        this.datepicker8 = this.myForm.get('datepicker8') as FormControl;
        this.datepicker9 = this.myForm.get('datepicker9') as FormControl;
        this.datepicker10 = this.myForm.get('datepicker10') as FormControl;
        this.datepicker12 = this.myForm.get('datepicker12') as FormControl;
        this.datepicker13 = this.myForm.get('datepicker13') as FormControl;
        this.datepicker14 = this.myForm.get('datepicker14') as FormControl;
        this.datepicker16 = this.myForm.get('datepicker16') as FormControl;
        this.datepicker17 = this.myForm.get('datepicker17') as FormControl;
    }

    createForm1 () {
        this.form1 = this.fb.group({
            datepicker: ['', Validators.required], // default
        });
        this.datepickerCtrl = this.form1.get('datepicker') as FormControl;
        this.datepickerCtrl.valueChanges.subscribe((values) => {
            //
        });
    }

    createForm2 () {
        this.form2 = this.fb.group({
            datepicker11: ['04/10/1989'], // Datepicker with initial value
        });
        this.datepicker11 = this.form2.get('datepicker11') as FormControl;

    }

    createForm3 () {
        this.form3 = this.fb.group({
            datepicker15: ''
        });
        this.datepicker15 = this.form3.get('datepicker15') as FormControl;

    }

    reset () {
        this.form3.reset({});
        this.datepicker15.markAsPristine();
    }

    setValue () {
        this.datepicker16.setValue(moment());
    }

}
