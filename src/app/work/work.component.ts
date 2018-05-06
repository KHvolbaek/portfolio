import { Component, OnInit } from '@angular/core';
import { CasesComponent } from '../cases/cases.component';

@Component({
  selector: 'app-work',
  template:  `
  <div class="casesWrapper">
  <div class="case" id="{{case.id}}" *ngFor="let case of cases"> 
    <h2>{{ case.caseName }}</h2>
  </div>
 </div> `,
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


