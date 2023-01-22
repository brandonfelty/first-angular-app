import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'holy moley';
  isHidden = false;
  clickHistory = [];

  toggleParagraph() {
    this.isHidden = !this.isHidden;
    this.clickHistory.push(Date());
  }
}
