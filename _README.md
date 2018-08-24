
# SimplyWell Web Styleguide

> Angular 4 app featuring [Angular 2](https://angular.io) and [Angular 4](https://github.com/angular/angular/tree/4.0.0-beta.0) ([Ahead of Time Compile](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html), [Router](https://angular.io/docs/ts/latest/guide/router.html), [Forms](https://angular.io/docs/ts/latest/guide/forms.html),
[Http](https://angular.io/docs/ts/latest/guide/server-communication.html),
[Services](https://gist.github.com/gdi2290/634101fec1671ee12b3e#_follow_@AngularClass_on_twitter),
[Tests](https://angular.io/docs/ts/latest/guide/testing.html), [E2E](https://angular.github.io/protractor/#/faq#what-s-the-difference-between-karma-and-protractor-when-do-i-use-which-)), [Karma](https://karma-runner.github.io/), [Protractor](https://angular.github.io/protractor/), [Jasmine](https://github.com/jasmine/jasmine), [Istanbul](https://github.com/gotwarlost/istanbul), [TypeScript](http://www.typescriptlang.org/), [@types](https://www.npmjs.com/~types), [TsLint](http://palantir.github.io/tslint/), [Codelyzer](https://github.com/mgechev/codelyzer), [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html), and [Webpack 2](http://webpack.github.io/).

## Quick start
**Make sure you have Node version >= 8.2.1  and NPM >= 5.3.0
> Clone/Download the repo then edit `app.component.ts` inside [`/src/app/app.component.ts`](/src/app/app.component.ts)

```bash
# clone repo

# install the repo with npm
npm install

# start the server
npm start


```
go to [http://localhost:4000](http://localhost:4000) in your browser

## Nexus Repository
> Previously You need nexus respositories added to local npm registre. https://confluence.viverae.com/display/ADMINZONE/npm+for+AppDev+and+CI


## Create a Lib
All the ui components are withing `src/app/libs/*` . You can as example `ui-button` or for an advanced component review `ui-datatable` and `ui-datepicker`

Remember update the package.json with the build and publish scripts
* `"build:ui-button": "ng-packagr -psrc/app/libs/ui-button/package.json"`
* `"publish:ui-button": "npm run build:ui-button && npm publish src/app/libs/ui-button/dist"`

> You can review the public components in https://files.aws.viverae.technology/nexus/#browse/browse:npm-snapshots

## Update and existing lib
Remberm bump up the package version before publish a new version . Otherwise you could break the last version.
```
"name": "@simplywell/ui-button",
"version": "0.2.2",
```
Update the CHANGELOG.md file to track each change.
```
### 0.2.2 : (2018-04-06)
* Added: @Input typings
```

## Test your Lib
ALl libraries are directly imported withing share.module and pointing to `src/` folder
```
import { UiButtonComponent } from '../libs/ui-button/src';
import { UiCheckboxComponent } from '../libs/ui-checkbox/src';
import { UiDatatableModule } from '../libs/ui-datatable/src';
import { UiDatepickerModule } from '../libs/ui-datepicker/src';
import { UiFormSelectModule } from '../libs/ui-form-select/src';
import { UiFullscreenModalComponent } from '../libs/ui-fullscreen-modal/src';
// ...
```
To review that all projects are able to download your last version . please install the last version as a package dependencty of the project. Running it in the root of this project:
```
npm install @simplywell/ui-button@latest
```
> Install the lib as dependecy of the app_guide project allow us to test the lib as thirdparty library, and to have it available for Advanced Modules like ui-datatable and ui-datepicker.

## Documento your lib in the Styleguide.module.ts
Create , update, test and document you libs and changes within the `styleguide.module.ts` so you can have and  test the general cases  for each libs.

> Keep updating and testing the styleguide module documenting you last changes to avoid break other projects ;)

### TODO:
* Running test before publishing a lib
* Add a readme in each lib to help installation (e.g. ui-toast)
* Review Aot each change

## Build and Publish Packages
1. Change the version number in the ui-element's package.json file
 - major (breaking changes).minor(non-breaking/enhancements).patch/bug
2. npm run build:ui-element-name
3. npm run publish:ui-element-name