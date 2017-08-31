import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RoutedComponent} from './routed.component';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

describe('RoutedComponent', () => {
  let component: RoutedComponent;
  let fixture: ComponentFixture<RoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoutedComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: Observable.of({param: 'someparam'})
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
