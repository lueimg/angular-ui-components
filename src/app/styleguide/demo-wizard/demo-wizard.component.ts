// // tslint:disable-next-line:max-line-length
// import { WizardComponents, WzOnExit, WzOnSaveAndExit, WzOnNext, WzAllowNavigation, WzNavigate } from './../../shared/wizard-steps/wizard.interfaces';
// import { Component, OnInit, EventEmitter } from '@angular/core';
// // tslint:disable-next-line:max-classes-per-file
// @Component({
//     selector: 'empty',
//     template: `I am a empty component`
// })
// export class EmptyComponent {}

// // tslint:disable-next-line:max-classes-per-file
// @Component({
//     selector: 'step1',
//     template: `I am a step1`
// })
// export class Step1Component {}

// // tslint:disable-next-line:max-classes-per-file
// @Component({
//     selector: 'step2',
//     template: `I am a step2`
// })
// export class Step2Component {}
// // tslint:disable-next-line:max-classes-per-file
// @Component({
//     selector: 'step3',
//     template: `I am a step3`
// })
// export class Step3Component {}
// // tslint:disable-next-line:max-classes-per-file
// @Component({
//     selector: 'complete',
//     template: `I am complete component`
// })
// export class CompleteComponent {}
// // tslint:disable-next-line:max-classes-per-file
// @Component({
//     selector: 'example4',
//     template: `I am example4 component`
// })
// export class Example4Component implements WzOnExit {
//     wzShowExitButton(): boolean {
//         return true;
//     }
//     wzOnExit(): void {
//         alert('Exit!');
//     }
// }
// // tslint:disable-next-line:max-classes-per-file
// @Component({
//     selector: 'Example5',
//     template: 'I am Example5 component'
// })
// export class Example5Component implements WzOnSaveAndExit {
//     wzShowSaveAndExitButton(): boolean {
//         return true;
//     }
//     wzOnSaveAndExit(): void {
//         alert('Save and exit!');
//     }
// }
// // tslint:disable-next-line:max-classes-per-file
// @Component({
//     selector: 'Example6',
//     template: 'I am Example6 component'
// })
// export class Example6Component implements WzOnNext {
//     wzShowNextButton(): boolean {
//        return true;
//     }
//     wzIsNextButtonDisabled(): boolean {
//         return false;
//     }
//     wzOnNext(wzFn: Function): void {
//         const res = confirm('should I go Next ?');
//         if (res) {
//             wzFn();
//         }
//     }
// }
// // tslint:disable-next-line:max-classes-per-file
// @Component({
//     selector: 'Example7',
//     template: 'I am Example7 component'
// })
// export class Example7Component implements WzAllowNavigation {
//     wzAllowMoveByNavigationSteps(): boolean {
//         return false;
//     }
// }
// // tslint:disable-next-line:max-classes-per-file
// @Component({
//     selector: 'Example8',
//     // tslint:disable-next-line:max-line-length
//     template: '<a (click)="goToStep(1)">Go toStep 1 </a> | <a (click)="goToStep(2)">Go toStep 2 </a>'
// })
// export class Example8Component implements WzNavigate {
//     wzNavigate: EventEmitter<number> = new EventEmitter<number>();
//     goToStep(stepNumber: number) {
//         this.wzNavigate.emit(stepNumber);
//     }
// }
// // tslint:disable-next-line:max-classes-per-file
// @Component({
//     selector: 'styleguide-wizard',
//     templateUrl: './demo-wizard.component.html',
//     styleUrls: ['./demo-wizard.component.scss'],
//     entryComponents: [
//         EmptyComponent,
//         Step1Component,
//         Step2Component,
//         Step3Component,
//         CompleteComponent,
//         Example4Component,
//         Example5Component,
//         Example6Component,
//         Example7Component,
//         Example8Component
//     ]
// })
// export class DemoWizardComponent {

//     wizardOne: WizardComponents = {
//         onEmpty: {
//             title: '',
//             component: EmptyComponent
//         },
//         steps: [],
//         onComplete: null
//     };

//     wizardOneCode = `

//     @Component({
//         selector: 'empty',
//         template: 'I am a empty component'
//     })
//     export class EmptyComponent {}


//     // ...


//     @Component({
//         selector: 'styleguide-wizard',
//         templateUrl: './demo-wizard.component.html',
//         styleUrls: ['./demo-wizard.component.scss'],
//         entryComponents: [
//             EmptyComponent,
//         ]
//     })
//     export class DemoWizardComponent
//     wizardOne: WizardComponents = {
//         onEmpty: {
//             title: '',
//             component: EmptyComponent
//         },
//         steps: [],
//         onComplete: null
//     };


//     // ... 

//     &lt;wizard title="Wizard empty" [components]="wizardOne"&gt;&lt;/wizard&gt;
    
//     `;

//     wizardTwo: WizardComponents = {
//         onEmpty: null,
//         steps: [
//             {
//                 title: 'Step 1',
//                 component: Step1Component
//             },
//             {
//                 title: 'Step 2',
//                 component: Step2Component
//             },
//             {
//                 title: 'Step 3',
//                 component: Step3Component
//             }
//         ],
//         onComplete: null
//     };

//     wizardTwoCode = `

//     @Component({
//         selector: 'step1',
//         template: 'I am a step1'
//     })
//     export class Step1Component {}
//     @Component({
//         selector: 'step2',
//         template: 'I am a step2'
//     })
//     export class Step2Component {}
//     @Component({
//         selector: 'step3',
//         template: 'I am a step3'
//     })


//     // ...


//     @Component({
//         selector: 'styleguide-wizard',
//         templateUrl: './demo-wizard.component.html',
//         styleUrls: ['./demo-wizard.component.scss'],
//         entryComponents: [
//             Step1Component,
//             Step2Component,
//             Step3Component,,
//         ]
//     })
//     export class DemoWizardComponent
//     wizardTwo: WizardComponents = {
//         onEmpty: null,
//         steps: [
//             {
//                 title: 'Step 1',
//                 component: Step1Component
//             },
//             {
//                 title: 'Step 2',
//                 component: Step2Component
//             },
//             {
//                 title: 'Step 3',
//                 component: Step3Component
//             }
//         ],
//         onComplete: null
//     };

    
//     // ... 

//     &lt;wizard title="Wizard with Steps" [components]="wizardTwo"&gt;&lt;/wizard&gt;
    
//     `;

//     wizardTree: WizardComponents = {
//         onEmpty: null,
//         steps: [
//             {
//                 title: 'Step 1',
//                 component: Step1Component
//             },
//             {
//                 title: 'Step 2',
//                 component: Step2Component
//             },
//             {
//                 title: 'Step 3',
//                 component: Step3Component
//             }
//         ],
//         onComplete: {
//             title: 'Complete',
//             component: CompleteComponent
//         }
//     };

//     wizardThreeCode = `

//     @Component({
//         selector: 'step1',
//         template: 'I am a step1'
//     })
//     export class Step1Component {}
//     @Component({
//         selector: 'step2',
//         template: 'I am a step2'
//     })
//     export class Step2Component {}
//     @Component({
//         selector: 'step3',
//         template: 'I am a step3'
//     })
//     @Component({
//         selector: 'complete',
//         template: I am complete component
//     })
//     export class CompleteComponent {}


//     // ...


//     @Component({
//         selector: 'styleguide-wizard',
//         templateUrl: './demo-wizard.component.html',
//         styleUrls: ['./demo-wizard.component.scss'],
//         entryComponents: [
//             Step1Component,
//             Step2Component,
//             Step3Component,
//             CompleteComponent
//         ]
//     })
//     export class DemoWizardComponent
//     wizardTree: WizardComponents = {
//         onEmpty: null,
//         steps: [
//             {
//                 title: 'Step 1',
//                 component: Step1Component
//             },
//             {
//                 title: 'Step 2',
//                 component: Step2Component
//             },
//             {
//                 title: 'Step 3',
//                 component: Step3Component
//             }
//         ],
//         onComplete: {
//             title: 'Complete',
//             component: CompleteComponent
//         }
//     };

    
//     // ... 

//     &lt;wizard title="Wizard with Steps" [components]="wizardTree"&gt;&lt;/wizard&gt;
    
//     `;

//     example4 = {
//         onEmpty: null,
//         steps: [
//             {
//                 title: 'Step 1',
//                 component: Example4Component
//             },
//             {
//                 title: 'Step 2',
//                 component: Step2Component
//             }
//         ],
//         onComplete: null
//     };

//     code4 = `
//     @Component({
//         selector: 'example4',
//         template: 'Example 4'
//     })
//     export class Example4Component implements WzOnExit {
//         wzShowExitButton(): boolean {
//             return true;
//         }
//         wzOnExit(): void {
//             alert('Exit!');
//         }
//     }

//     @Component({
//         selector: 'step2',
//         template: 'I am a step2'
//     })
//     export class Step2Component {}

//     // ...


//     @Component({
//         selector: 'styleguide-wizard',
//         template: '

//             &lt;wizard title="Wizard with Exit" [components]="example"&gt;&lt;/wizard&gt;
        
//             ',
//         entryComponents: [
//             Example4Component,
//             Step2Component
//         ]
//     })
//     export class DemoWizardComponent
//     example: WizardComponents = {
//         onEmpty: null,
//         steps: [
//             {
//                 title: 'Step 1',
//                 component: Example4Component
//             },
//             {
//                 title: 'Step 2',
//                 component: Step2Component
//             }
//         ],
//         onComplete: null
//     };

//     `;

//     example5: WizardComponents = {
//         onEmpty: null,
//         steps: [
//             {
//                 title: 'Step 1',
//                 component: Example5Component
//             },
//             {
//                 title: 'Step 2',
//                 component: Step2Component
//             }
//         ],
//         onComplete: null
//     };

//     code5 = `
//     @Component({
//         selector: 'Example5',
//         template: 'I am Example5 component'
//     })
//     export class Example5Component implements WzOnSaveAndExit {
//         wzShowSaveAndExitButton(): boolean {
//             return true;
//         }
//         wzOnSaveAndExit(): void {
//             alert('Save and exit!');
//         }
//     }

//     @Component({
//         selector: 'step2',
//         template: 'I am a step2'
//     })
//     export class Step2Component {}

//     // ...


//     @Component({
//         selector: 'styleguide-wizard',
//         template: '

//             &lt;wizard title="Wizard with Exit" [components]="example"&gt;&lt;/wizard&gt;
        
//             ',
//         entryComponents: [
//             Example5Component,
//             Step2Component
//         ]
//     })
//     export class DemoWizardComponent
//     example: WizardComponents = {
//         onEmpty: null,
//         steps: [
//             {
//                 title: 'Step 1',
//                 component: Example5Component
//             },
//             {
//                 title: 'Step 2',
//                 component: Step2Component
//             }
//         ],
//         onComplete: null
//     };

//     `;

//     example6: WizardComponents = {
//         onEmpty: null,
//         steps: [
//             {
//                 title: 'Step 1',
//                 component: Example6Component
//             },
//             {
//                 title: 'Step 2',
//                 component: Step2Component
//             }
//         ],
//         onComplete: null
//     };

//     code6 = `
//     @Component({
//         selector: 'Example6',
//         template: 'I am Example6 component'
//     })
//     export class Example6Component implements WzOnNext {
//         wzShowNextButton(): boolean {
//            return true;
//         }
//         wzIsNextButtonDisabled(): boolean {
//             return false;
//         }
//         wzOnNext(wzFn: Function): void {
//             const res = confirm('should I go Next ?');
//             if (res) {
//                 wzFn();
//             }
//         }
//     }

//     @Component({
//         selector: 'step2',
//         template: 'I am a step2'
//     })
//     export class Step2Component {}

//     // ...


//     @Component({
//         selector: 'styleguide-wizard',
//         template: '

//             &lt;wizard title="Wizard with Exit" [components]="example"&gt;&lt;/wizard&gt;
        
//             ',
//         entryComponents: [
//             Example6Component,
//             Step2Component
//         ]
//     })
//     export class DemoWizardComponent
//     example: WizardComponents = {
//         onEmpty: null,
//         steps: [
//             {
//                 title: 'Step 1',
//                 component: Example6Component
//             },
//             {
//                 title: 'Step 2',
//                 component: Step2Component
//             }
//         ],
//         onComplete: null
//     };

//     `;

//     example7: WizardComponents = {
//         onEmpty: null,
//         steps: [
//             {
//                 title: 'Step 1',
//                 component: Example7Component
//             },
//             {
//                 title: 'Step 2',
//                 component: Step2Component
//             }
//         ],
//         onComplete: null
//     };

//     code7 = `
//     @Component({
//         selector: 'Example7',
//         template: 'I am Example7 component'
//     })
//     export class Example7Component implements WzAllowNavigation {
//         wzAllowMoveByNavigationSteps(): boolean {
//             return false;
//         }
//     }

//     @Component({
//         selector: 'step2',
//         template: 'I am a step2'
//     })
//     export class Step2Component {}

//     // ...


//     @Component({
//         selector: 'styleguide-wizard',
//         template: '

//             &lt;wizard title="Wizard with Exit" [components]="example"&gt;&lt;/wizard&gt;
        
//             ',
//         entryComponents: [
//             Example7Component,
//             Step2Component
//         ]
//     })
//     export class DemoWizardComponent
//     example: WizardComponents = {
//         onEmpty: null,
//         steps: [
//             {
//                 title: 'Step 1',
//                 component: Example7Component
//             },
//             {
//                 title: 'Step 2',
//                 component: Step2Component
//             }
//         ],
//         onComplete: null
//     };

//     `;

//     example8: WizardComponents = {
//         onEmpty: null,
//         steps: [
//             {
//                 title: 'Step 1',
//                 component: Step1Component
//             },
//             {
//                 title: 'Step 2',
//                 component: Step2Component
//             }
//         ],
//         onComplete: {
//             title: 'Complete',
//             component: Example8Component
//         }
//     };

//     code8 = `
//     @Component({
//         selector: 'step1',
//         template: 'I am a step1'
//     })
//     export class Step1Component {}
//     @Component({
//         selector: 'step2',
//         template: 'I am a step2'
//     })
//     export class Step2Component {}

//     @Component({
//         selector: 'Example8',
//         template: '
//         &lt;a (click)=\&#34;goToStep(1)\&#34;&gt;Go toStep 1 &lt;/a&gt; &#10;
//          | &lt;a (click)=\&#34;goToStep(2)\&#34;&gt;Go toStep 2 &lt;/a&gt;'
//     })
//     export class Example8Component implements WzNavigate {
//         wzNavigate: EventEmitter<number> = new EventEmitter<number>();
//         goToStep(stepNumber: number) {
//             this.wzNavigate.emit(stepNumber);
//         }
//     }

//     // ...


//     @Component({
//         selector: 'styleguide-wizard',
//         template: '

//             &lt;wizard title="Wizard with Exit" [components]="example"&gt;&lt;/wizard&gt;
        
//             ',
//         entryComponents: [
//             Step1Component,
//             Step2Component,
//             Example8Component
//         ]
//     })
//     export class DemoWizardComponent
//     example: WizardComponents = {
//         onEmpty: null,
//         steps: [
//             {
//                 title: 'Step 1',
//                 component: Step1Component
//             },
//             {
//                 title: 'Step 2',
//                 component: Step2Component
//             }
//         ],
//         onComplete: {
//             title: 'Complete',
//             component: Example8Component
//         }
//     };

//     `;

// }
