import { Component } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animRoutes', [
      transition('* <=> *', [
        query(':enter', [
                style({ opacity: 0 })
            ], { optional: true }
        ),
        group([
            query(':leave', [
                    animate(300, style({ opacity: 0 }))
                ],
                { optional: true }
            ),
            query(':enter', [
                    style({ opacity: 0 }),
                    animate(300, style({ opacity: 1 }))
                ],
                { optional: true }
            )
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'app';

  public menuActive: boolean = false;

  menuTrigger(){
    this.menuActive = !this.menuActive;
    
  }

  getPage(outlet) {
    return outlet.activatedRouteData['page'] || 'one';
  }
} 