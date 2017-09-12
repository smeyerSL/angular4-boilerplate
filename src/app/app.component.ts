import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {DemoComponent} from "./components/demo/demo.component";
import {LanguageService} from './services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  entryComponents: [DemoComponent],
  providers: [LanguageService]
})
export class AppComponent {

  languageService: LanguageService;

  constructor(languageService: LanguageService) {
    this.languageService = languageService;
    this.languageService.initLanguage();
  }

  switchLanguage(languageTag: string) {
    this.languageService.switchLanguage(languageTag);
  }
}
