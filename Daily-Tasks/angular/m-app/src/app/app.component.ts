import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mApp';
  siteTitle = 'My App';
  printLog() {
    alert();
    this.siteTitle = "Title has changed"
  }
}
