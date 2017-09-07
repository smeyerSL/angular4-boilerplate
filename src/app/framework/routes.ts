import {Routes} from "@angular/router";
import {DemoComponent} from "../components/demo/demo.component";
import {RoutedComponent} from "../components/routed/routed.component";
import {GenericErrorComponent} from '../components/generic-error/generic-error.component';
import * as Constants from './constants';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: Constants.ROUTE_DEMO,
    pathMatch: 'full'
  },
  {
    path: Constants.ROUTE_DEMO,
    component: DemoComponent
  },
  {
    path: Constants.ROUTE_ROUTED,
    component: RoutedComponent
  },
  //error routes
  {
    path: Constants.ROUTE_PAGE_NOT_FOUND,
    component: GenericErrorComponent,
    data: [{errorType: Constants.ERROR_PAGE_NOT_FOUND}]
  },
  {
    path: Constants.ROUTE_SESSION_EXPIRED,
    component: GenericErrorComponent,
    data: [{errorType: Constants.ERROR_SESSION_EXPIRED}]
  },
  {
    path: Constants.ROUTE_PERMISSION_DENIED,
    component: GenericErrorComponent,
    data: [{errorType: Constants.ERROR_PERMISSION_DENIED}]
  },
  {
    path: Constants.ROUTE_UNAUTHORIZED,
    component: GenericErrorComponent,
    data: [{errorType: Constants.ERROR_UNAUTHORIZED}]
  },
  {
    path: Constants.ROUTE_TOKEN_INVALID,
    component: GenericErrorComponent,
    data: [{errorType: Constants.ERROR_TOKEN_INVALID}]
  }
]
