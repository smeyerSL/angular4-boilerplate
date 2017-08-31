import {TestBed, async} from '@angular/core/testing';
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule, TranslateLoader, TranslateService} from "@ngx-translate/core";
import {HttpClientModule, HttpClient} from "@angular/common/http";

import {AppComponent} from './app.component';
import {DemoComponent} from "./components/demo/demo.component";
import {HttpLoaderFactory} from "./app.module";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, DemoComponent
      ],
      imports: [
        RouterModule,
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
