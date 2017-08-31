# Angular 4 Boilerplate

Angular 4 boilerplate project for larger scale applications (WIP)__
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
Additionally to the both predefined production and testing environments there are two additional ones (.int for integration and .stag for staging) holding the specific config for those systems__
You can activate the wanted environment by adding the --environment flag like this: **ng (build|serve|b|s) --(env|environment)=(dev|int|stag|prod)**, dev is default.
 
## Translations
Bundle files live in assets/i18n/{languageTag}.json. Translations can be triggered with the translate pipe.__
They take nested json, so its possible to navigate trough the keys with dots: {{ 'component.title' | translate }}__
For more information read https://github.com/ngx-translate/core__

## SSL
For local development there is a self signed certificate in the ssl folder. For startup using the certificate run **npm run start**
