# UI-Form-Select Component

### 0.2.0: May 9, 2018
* All selects now use position="fixed" for displaying the panel of options.
* New component attribute - ignoreBodyScroll: Useful for selects within a modal or within any element where the position of the select is not relative to the scroll position of the document.

### 0.1.14: May 9, 2018
* Bugfix: Fixed a bug where using positionType="fixed" could result in the options panel opening in the wrong location - forreal this time

### 0.1.13: May 9, 2018
* Bugfix: Fixed a bug where using positionType="fixed" could result in the options panel opening in the wrong location

### 0.1.12: May 3, 2018
* Bugfix: Fixed a bug where the options dropdown would not be aligned correctly when using Internet Explorer
* Known Issue: Input [dynamicSize] does not currently work in Internet Explorer

### 0.1.9: April 18,2018
* update CSS

### 0.1.2: (2018-04-06)
* updating peerDependecies
### 0.1.0: March 28, 2018
* Published library to NPM repo

### 0.0.40: March, 22, 2018
* Bugfix: Fixed a bug where select dropdown would not open in the correct location if multiple selects were stacked on top of each other.
* Bugfix: Fixed a bug where text could sometimes be visible behind an open select menu.

### 0.0.39: March 12, 2018
* Added feature: search @Input and filter list
* added feature: showSelectedText @Input

### 0.0.38: March 12, 2018
* Bugfix: Fixed bug where the select options can be cutoff by the bottom bounds of a modal.  To use in a modal use the input positionType="fixed"

### 0.0.37: March, 12, 2018
* Bugfix: Fixed bug where the scroll lock would stay in place after close the options list

### 0.0.36: March, 12, 2018
* Added feature: HTML body will no longer be scrollable while the select options list is open
