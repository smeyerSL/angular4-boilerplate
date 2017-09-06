import {Routes} from "@angular/router";
import {DemoComponent} from "../components/demo/demo.component";
import {RoutedComponent} from "../components/routed/routed.component";
import {GenericErrorComponent} from '../components/generic-error/generic-error.component';
import {
  ERROR_PAGE_NOT_FOUND, ERROR_SESSION_EXPIRED, ERROR_PERMISSION_DENIED, ERROR_UNAUTHORIZED,
  ERROR_TOKEN_INVALID
} from './constants';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full'
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'routed/:param',
    component: RoutedComponent
  },
  //error routes
  {
    path: '**',
    component: GenericErrorComponent,
    data: [{errorType: ERROR_PAGE_NOT_FOUND}]
  },
  {
    path: 'sessionExpired',
    component: GenericErrorComponent,
    data: [{errorType: ERROR_SESSION_EXPIRED}]
  },
  {
    path: 'permissionDenied',
    component: GenericErrorComponent,
    data: [{errorType: ERROR_PERMISSION_DENIED}]
  },
  {
    path: 'unauthorized',
    component: GenericErrorComponent,
    data: [{errorType: ERROR_UNAUTHORIZED}]
  },
  {
    path: 'tokenInvalid',
    component: GenericErrorComponent,
    data: [{errorType: ERROR_TOKEN_INVALID}]
  }
]
