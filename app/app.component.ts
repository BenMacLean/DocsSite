import { Component } from '@angular/core';

import { HomeComponent } from './home/home.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [HomeComponent]
})
export class AppComponent {
  title = 'Jonathan';
}
