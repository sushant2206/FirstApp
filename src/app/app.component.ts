import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous Infosytems'
  name = 'Sushant'
  public fun()
  {
      return "Good Morning";
  }

  public gun()
  {
      this.name="Button Clicked";
  }
}
