import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public menuActive: boolean = false;

  menuTrigger(){
    this.menuActive = !this.menuActive;
  }
