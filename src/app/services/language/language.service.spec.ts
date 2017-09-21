import { TestBed, inject } from '@angular/core/testing';

import { LanguageService } from './language.service';
import {TranslateModule} from '@ngx-translate/core';

describe('LanguageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanguageService],
      imports: [TranslateModule.forRoot()]
    });
  });

  it('should be created', inject([LanguageService], (service: LanguageService) => {
    expect(service).toBeTruthy();
  }));

  it('should initially detect the language properly', inject([LanguageService], (service: LanguageService) => {
    localStorage.removeItem('lang')
    service.initLanguage('en');
    expect(localStorage.getItem('lang')).toEqual('en');
  }));

  it('should only init a supported language', inject([LanguageService], (service: LanguageService) => {
    localStorage.removeItem('lang')
    service.initLanguage('fr');
    expect(localStorage.getItem('lang')).toEqual('en');
  }));

  it('should not overwrite language from localStorage on init', inject([LanguageService], (service: LanguageService) => {
    localStorage.setItem('lang', 'en')
    service.initLanguage('de');
    expect(localStorage.getItem('lang')).toEqual('en');
  }));

  it('should switch languages', inject([LanguageService], (service: LanguageService) => {
    localStorage.setItem('lang', 'en')
    service.switchLanguage('de');
    expect(localStorage.getItem('lang')).toEqual('de');
  }));

  it('should not switch languages if the new language is not supported', inject([LanguageService], (service: LanguageService) => {
    localStorage.setItem('lang', 'de')
    service.switchLanguage('fr');
    expect(localStorage.getItem('lang')).toEqual('de');
  }));

  it('should not switch languages if the new language is the old language', inject([LanguageService], (service: LanguageService) => {
    let callbackCalled = false;
    service.subscribeLanguageChange(() => {
      callbackCalled = true;
    });

    localStorage.setItem('lang', 'de')
    service.switchLanguage('de');
    expect(localStorage.getItem('lang')).toEqual('de');
    expect(callbackCalled).toEqual(false);
  }));

  it('should inform on language switch', inject([LanguageService], (service: LanguageService) => {
    let callbackCalled = false;
    service.subscribeLanguageChange(() => {
      callbackCalled = true;
    });
    localStorage.removeItem('lang');
    service.switchLanguage('de');

    expect(callbackCalled).toEqual(true);
  }));
});
