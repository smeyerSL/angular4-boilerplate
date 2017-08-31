import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {TranslateModule, TranslateLoader, TranslateService} from "@ngx-translate/core";
import {HttpClientModule, HttpClient} from "@angular/common/http";

import { DemoComponent } from './demo.component';
import {HttpLoaderFactory} from "../../app.module";

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoComponent ],
      imports: [
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
