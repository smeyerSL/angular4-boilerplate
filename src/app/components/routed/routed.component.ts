import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-routed',
  templateUrl: './routed.component.html',
  styleUrls: ['./routed.component.scss']
})
export class RoutedComponent implements OnInit {

  param: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('param')) {
        this.param = params['param'];
      }
    });
  }

  ngOnInit() {
  }

}
