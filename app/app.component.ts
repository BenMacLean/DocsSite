import { Component } from '@angular/core';

import { Http, Response } from '@angular/http';

import { HomeComponent } from './home/home.component';
import 'rxjs/Rx';


const URL_CUSTOMER = 'config.json';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [HomeComponent]
    // providers: [Http]
})
export class AppComponent {
  // title = '<a>FooBar</a>';
  config: Observable<any[]>;
  constructor(private _http: Http){}

  ngOnInit(){
    this.config = this.getData();
  }

  getData() {
    return this._http.get('http://localhost:1337/getHtmlForFilePath/BroadsoftLabs/hubDocs/Security.md')
      .map((response: Response) => response.json().html);
  }
}
