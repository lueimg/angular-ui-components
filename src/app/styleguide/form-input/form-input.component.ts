import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators
} from '@angular/forms';
import { ValidatorPatterns } from '../../../validators/validator-patterns';

@Component({
  selector: 'styleguide-form-textinput',
  templateUrl: './form-input.component.html'
})
export class StyleguideFormInputComponent implements OnInit {
  input7Field: FormControl;
  input22Field: FormControl;
  testInput: string;
  demoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.testInput = 'placeholder';
    this.createForm();
  }

  createForm() {
    this.demoForm = this.formBuilder.group({
      input1: [''],
      input11: ['Test clean Icon'],
      input2: ['', Validators.required],
      input22: ['', Validators.required],
      input3: [ 'Austin', Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15)])],
      input4: '',
      input5: '',
      testnamelast: ['Tate', Validators.compose([Validators.required, Validators.minLength(2),Validators.maxLength(15)])],
      input6: 'Text Test',
      input7: ['Austin', [Validators.required, Validators.minLength(5),  Validators.maxLength(15)]],
      input8: ['', Validators.required],
      input9: ['', Validators.required],
      input10: [''],
    });

    this.demoForm.get('input3').validator = Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15)
    ]);
    this.demoForm.get('input3').updateValueAndValidity();

    this.demoForm.get('testnamelast').validator = Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(15)
    ]);
    this.demoForm.get('testnamelast').updateValueAndValidity();

    this.input22Field = this.demoForm.get('input22') as FormControl;
    this.input7Field = this.demoForm.get('input7') as FormControl;

  }
  encodeHtml(str: string) {
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // tslint:disable-next-line:member-ordering
  code1 = this.encodeHtml(`
    <div class="input-group">
        <input type="text" name="input1" id="input1" formControlName="input" autofocus>
        <span class="bar"></span>
        <label for="input1">Input Basic Autofocus</label>
    </div>

    // or Use the ui-form-input component
    
    <ui-input label="Input Basic Component" formControlName="input" cleanIcon></ui-input>

    `);

  // tslint:disable-next-line:member-ordering
  code2 = this.encodeHtml(`
    <div class="col-xs-6 nopadding-left">
        <div class="input-group">
            <input type="text" name="input" id="input" formControlName="input" required>
            <span class="bar"></span>
            <label for="input">Input Required
                <span class="required">*</span>
            </label>
            <div class="error-message-ani" [ngClass]="{'active': demoForm.controls.input2.errors && demoForm.controls.input2.dirty}">
                <p class="error">
                    <span class="error-message" [ngClass]="{'active': demoForm.controls['input2'].hasError('required')}">Required...</span>
                </p>
            </div>
        </div>
    </div>

    // or Use the ui-form-input component
    // In the controller : this.inputControl = this.demoForm.get('input') as FormControl;

    <ui-input label="Input Required" formControlName="input" required>
        <div class="error-message-ani" 
            [ngClass]="{'active': inputControl.errors && inputControl.dirty}">
            <p class="error">
                <span class="error-message" [ngClass]="{'active': inputControl.hasError('required')}">Required...</span>
            </p>
        </div>
    </ui-input>

    `);

    // tslint:disable-next-line:member-ordering
  code3 = this.encodeHtml(`
  <div class="col-xs-6 nopadding-right">
      <div class="input-group">
          <input type="text" name="input3" id="input3" formControlName="input3" required>
          <i class="viverae-icon-font icon-form_check"></i>
          <span class="bar"></span>
          <label for="input3">Input Validated
              <span class="required">*</span>
          </label>
          <div class="error-message-ani" [ngClass]="{'active': demoForm.controls.input3.errors && demoForm.controls.input3.dirty}">
              <p class="error">
                  <span class="error-message" [ngClass]="{'active': demoForm.controls['input3'].hasError('required')}">Required....</span>
                  <span class="error-message" [ngClass]="{'active': demoForm.controls['input3'].hasError('minlength')}">Must be at least 5 characters</span>
                  <span class="error-message" [ngClass]="{'active': demoForm.controls['input3'].hasError('maxlength')}">No more than 15 characters</span>
              </p>
          </div>
      </div>
    </div>

      // Or using the ui-form-input component

      <ui-input label="Input Validated" formControlName="input" required checkIcon>
          <div class="error-message-ani" [ngClass]="{'active': inputControl.errors && inputControl.dirty}">
              <p class="error">
                  <span class="error-message" [ngClass]="{'active': inputControl.hasError('required')}">Required....</span>
                  <span class="error-message" [ngClass]="{'active': inputControl.hasError('minlength')}">Must be at least 5 characters</span>
                  <span class="error-message" [ngClass]="{'active': inputControl.hasError('maxlength')}">No more than 15 characters</span>
              </p>
          </div>
      </ui-input>
    `);

    // tslint:disable-next-line:member-ordering
  code4 = this.encodeHtml(`
    <div class="col-xs-6 nopadding-left">
        <div class="input-group">
            <input class="large" type="text" name="input4" id="input4" formControlName="input4" required>
            <span class="bar"></span>
            <label for="input4">Input Large (large)
                <span class="required">*</span>
            </label>
        </div>
    </div>

    // ui-form-input 

    <ui-input label="Input Large (large)" formControlName="input8" size="large" required></ui-input>

    `);

    // tslint:disable-next-line:member-ordering
  code5 = this.encodeHtml(`
  <div class="col-xs-6 nopadding-right">
      <div class="input-group">
          <input class="xlarge" type="text" name="input5" id="input5" formControlName="input5" required>
          <span class="bar"></span>
          <label for="input5">Input Extra Large (xlarge)
              <span class="required">*</span>
          </label>
      </div>
  </div>

  // ui-form-input 

  <ui-input label="Input Large (large)" formControlName="input9" size="xlarge" required></ui-input>

  `);

}
