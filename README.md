# Angular 4 Boilerplate

Angular 4 boilerplate project for larger scale applications (WIP)<br />
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Project creation
Project was created with:
* ng new angular4-boilerplate --style=scss

## Dependencies
* Install node and npm
* npm install @angular/cli -g
* npm install gulp -g

## Overview
This boilerplate contains
* routing
* environments
* i18n
* sass
* self signed certificate 
* Bootstrap 3
* modernizer
* gulp

Visit https://localhost:4200/demo to see the output of selected boilerplate features.

## Environments
Additionally to the both predefined production and testing environments there are two additional ones (.int for integration and .stag for staging) holding the specific config for those systems<br />
You can activate the wanted environment by adding the --environment flag like this: <br /> 
**ng (build|serve|b|s) --(env|environment)=(dev|int|stag|prod)**, dev is default.
 
## Languages
There is a LanguageService which initializes the language and the external TranslationService. Furthermore it provides a function you can where you can subscribe language changes and react accordingly in your components.
 
## Translations
Bundle files live in src/assets/i18n/{languageTag}.json. Translations can be triggered with the translate pipe.<br />
They take nested json, so its possible to navigate trough the keys with dots: {{ 'component.title' | translate }}<br />
For more information read https://github.com/ngx-translate/core<br />

## Routing
Define your routes in src/app/framework/routes.ts

## SSL
For local development there is a self signed certificate in the src/ssl folder. For startup using the certificate run **npm run start**

## Sass
You CAN distribute you sass code to each and every component, but I recommend to keep your .scss files at the src/assets/sass folder. The **entrypoint.scss** is imported once in Angulars global stylesheet file and outgoing from the that entrypoint you can import all you .scss files. <br />
If you want to use less or plain css, run **ng set defaults.styleExt (less|css|...)**. This tells the Angular CLI what to use. Change the existing file extensions and to be safe grep the code for **scss**, it may happen that some config file was not changed automatically.

## modernizr
A prebuilt version of modernizr is contained in **src/assets/js/modernizr.js**. Die configuration used can be found at **modernizr-config.json**.<br />
If you want to change the modernizr settings then modify the modernizr.json file and then run **gulp (build-modernizer)**

## Error pages
There is a GenericErrorComponent which can be styled. It collects all kinds of errors coming in via a route. Use those routes to redirect in case of an error. The 404 route always hits. <br />
Translations follow a naming pattern. When you add a new error create a new translation object in **errorPages** named after your errorType.<br />
Try it by visiting some random URL.
