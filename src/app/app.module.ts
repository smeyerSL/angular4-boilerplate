import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {DemoComponent} from "./components/demo/demo.component";
import {RoutedComponent} from "./components/routed/routed.component";
import {appRoutes} from "./framework/routes";
import { GenericErrorComponent } from './components/generic-error/generic-error.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    RoutedComponent,
    DemoComponent,
    GenericErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
