import {Routes} from "@angular/router";
import {DemoComponent} from "../components/demo/demo.component";
import {RoutedComponent} from "../components/routed/routed.component";

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
  }
]
