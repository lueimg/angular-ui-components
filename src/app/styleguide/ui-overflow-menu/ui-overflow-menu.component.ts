import { Component } from '@angular/core';
import { UI_OVERFLOW_MENU_DIVIDER } from '../../libs/ui-overflow-menu/public_api';

@Component({
    selector: 'style-guide-ui-overflow-menu',
    templateUrl: './ui-overflow-menu.component.html',
})
export class StyleGuideUiOverflowMenuComponent {

    clickedOption: any;
    options1 = [
        'Long Text ',
        'missed',
        'does not recur',
        'divider',
        'set as recurring'
    ];
    model1 = '';
    model3 = 'Long Text ';

    options2 = [
        { name: 'Option 1', value: 'option1' },
        UI_OVERFLOW_MENU_DIVIDER,
        { name: 'Option 2', value: 'option2' },
        UI_OVERFLOW_MENU_DIVIDER,
        { name: 'Option 3', value: 'option3' },
        UI_OVERFLOW_MENU_DIVIDER,
        { name: 'Option 4', value: 'option4' },
    ];
    model2 = null;
    model4 = { name: 'Option 4', value: 'option4' };

    onClickOption (value) {
        this.clickedOption = value;
    }
}
