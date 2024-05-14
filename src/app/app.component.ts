import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appointment-app';

  items:string [] = [""];

  log(text: string): void {

    var message  = text;
    console.log(message);

  }
}
