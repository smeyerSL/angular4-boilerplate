import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {DemoComponent} from "./components/demo/demo.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  entryComponents: [DemoComponent]
})
export class AppComponent {

  translateService: TranslateService;

  constructor(translateService: TranslateService) {
    this.translateService = translateService;
    this.translateService.setDefaultLang('en');

    this.translateService.use('en');
  }

  switchLanguage(languageTag: string) {
    this.translateService.use(languageTag);
  }
}
