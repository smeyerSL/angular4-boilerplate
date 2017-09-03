# Angular 4 Boilerplate

Angular 4 boilerplate project for larger scale applications (WIP)<br />
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Project creation
Project was created with:
* ng new angular4-boilerplate --style=scss

## Overview
This boilerplate contains
* routing
* environments
* i18n
* sass
* self signed certificate

## Environments
Additionally to the both predefined production and testing environments there are two additional ones (.int for integration and .stag for staging) holding the specific config for those systems<br />
You can activate the wanted environment by adding the --environment flag like this: <br /> 
**ng (build|serve|b|s) --(env|environment)=(dev|int|stag|prod)**, dev is default.
 
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

