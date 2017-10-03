import { Component, OnInit } from '@angular/core';
import {ProtectedComponent} from '../protected/protected.component';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {ROUTE_SIGN_IN} from '../../framework/constants';

@Component({
  selector: 'app-signed-in',
  templateUrl: './signed-in.component.html'
})
export class SignedInComponent extends ProtectedComponent implements OnInit {

  authenticationService: AuthenticationService;

  constructor(authenticationService: AuthenticationService) {
    super();
    this.authenticationService = authenticationService;
  }

  ngOnInit() {
  }

  doLogout() {
    this.authenticationService.logout(ROUTE_SIGN_IN);
  }

}
