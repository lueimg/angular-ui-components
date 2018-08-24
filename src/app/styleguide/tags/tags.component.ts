import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'styleguide-tags',
    templateUrl: './tags.component.html'
})
export class StyleguideTagsComponent implements OnInit {

    tag2: FormControl;
    tag3: FormControl;
    tag4: FormControl;
    tag5: FormControl;
    tag1: FormControl;
    form: FormGroup;

    tag10 = null;
    tag11 = null;

    constructor (private fb: FormBuilder) {}
    ngOnInit() {
        this.createForm();
    }
    createForm () {
        this.form = this.fb.group({
            tag1: false,
            tag2: true,
            tag3: false,
            tag4: [{value: true, disabled: true}],
            tag5: '',
        });
        this.tag1 = this.form.get('tag1') as FormControl;
        this.tag2 = this.form.get('tag2') as FormControl;
        this.tag3 = this.form.get('tag3') as FormControl;
        this.tag4 = this.form.get('tag4') as FormControl;
        this.tag5 = this.form.get('tag5') as FormControl;
    }

    alert () {
        window.alert('clicked!');
    }
}
