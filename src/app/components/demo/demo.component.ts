import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {LanguageService} from '../../services/language/language.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  envName: string = environment.envName;
  languageService: LanguageService;

  constructor(languageService: LanguageService) {
    this.languageService = languageService;
  }

  ngOnInit() {
    this.languageService.subscribeLanguageChange(() => {
      console.log("### Lanuage was changed ###");
    })
  }

}
