import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ROUTE_SIGN_IN} from '../../framework/constants';
import {ServiceLocator} from '../../framework/service.locator';
import {AuthenticationService} from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
})
export class ProtectedComponent {

  router: Router;
  authenticationService: AuthenticationService;

  constructor() {
    this.router = ServiceLocator.injector.get(Router);
    this.authenticationService = ServiceLocator.injector.get(AuthenticationService);
    if (!this.authenticationService.validateSignedInUser()) {
      this.router.navigate([ROUTE_SIGN_IN]);
    }
  }
}
