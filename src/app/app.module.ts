import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Injector} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {DemoComponent} from "./components/demo/demo.component";
import {RoutedComponent} from "./components/routed/routed.component";
import {appRoutes} from "./framework/routes";
import { GenericErrorComponent } from './components/generic-error/generic-error.component';
import {AuthenticationService} from './services/authentication/authentication.service';
import {HttpResponseInterceptor} from './framework/http-response.interceptor';
import {HttpAuthInterceptor} from './framework/http-auth.interceptor';
import {ServiceLocator} from './framework/service.locator';
import { SignedInComponent } from './components/signed-in/signed-in.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import { ProtectedComponent } from './components/protected/protected.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    RoutedComponent,
    DemoComponent,
    GenericErrorComponent,
    SignInComponent,
    SignedInComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpResponseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    ServiceLocator.injector = this.injector;
  }
}
