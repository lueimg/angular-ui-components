### 0.3.20 (2018-05-10)
*added: Input [position]

### 0.3.19 (2018-05-10)
* bugfix: Fixed a bug where using [selectRange] without providing an initial value object would result in an exception.
* bufix: removed [dynamicSize] from internal <ui-form-select> component.

### 0.3.18 (2018-04-18)
* added: Add a date manually by typing in the ui-input
* added: Custom validators for Datepicker to show Custom messages into the ui-input
* bugfix: formControl initial value
* bugfix: fixing .fixed Position (css)
* bugfix: MaxDate
* Improve performance by lazy listener and OnPush Change detector
* refactor: organizing methods

### 0.3.17 (2018-04-17)
* added: Show errors from ui-input
* added: Update datepicker value from input change manually
* added: added ViewFormatValidator
* added: deleting zombie code

### 0.3.16 (2018-04-16)
* fix: fix Css in MS Edge
* fix: update calendar and select on click Today button
* fix external dependencies and reduce bundle based on https://github.com/dherges/ng-packagr/issues/163
### 0.3.15 (2018-04-06)
* Updating peer dependecies
### 0.3.14, April 2, 2018
* Added feature: The datepicker now supports selecting a date range by using the @Input selectRange

### 0.3.13
* added : calendarIconName @Input
* bugfix: fix today button styles
* bugfix: update the calendar to the month of the last day selected

### 0.3.12: March 14, 2018
* Bugfix: Fixed bug where using the arrows to move either from December to January or from January to December would not correctly update the year in the select dropdown -- Again!

### 0.3.11: March 14, 2018
* Added feature:  Datepicker now validates the date selected or typed against minDate and maxDate if either or both inputs are provided
* Added feature: The Datepicker can now show an example of the desired date format through the input showExample
* Bugfix: Fixed a bug where an initial value provided to the form control would not be formatted to match the viewFormat

### 0.3.10: March 13, 2018
* Bugfix: adding pointer-events: auto to avoid conflict with legacy css rules

### 0.3.9: March 13, 2018
* Bugfix: Fixed bug where a date, which was set as unclickable, when clicked could open the select menu
* Bugfix: Updated CSS class names so as to not conflict with existing stylesheets
* Bugfix: Fixed a bug where clearing the input would not propagate changes through from controls

### 0.3.8: March, 13, 2018
* Bugfix: Fixed bug where the arrows could be used to change the month of the datepicker beyond the max and min dates
* BugFix: Fixed bug where using the arrows to move either from December to January or from January to December would not correctly update the year in the select dropdown
* Added feature: The datepicker now uses the ui-input component and supports all of the ui-input component's inputs.  Note: currently there is a bug with clearIcon

### "version": "0.3.7"
* fix showErrorStyle property , increase calendar height hardcoded value for locationPosition="fixed"

#"version": "0.3.3"
* updating library, coach has the version 0.3.3
