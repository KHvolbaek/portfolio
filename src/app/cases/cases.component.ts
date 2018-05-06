import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngfor-example',
  template: `
 <div class="casesWrapper">
  <div class="case" #casewidth id="{{case.id}}" *ngFor="let case of cases"  [ngStyle]="{'height.px': casewidth.offsetWidth }">  
    <div class="case-content">
      <h2>{{ case.caseName }}</h2>
    </div>
  </div>
 </div>
 `,
 styleUrls: ['./cases.component.scss']

})

export class CasesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  cases: any[] = [
    {
      "caseName": "Case 1", "id": 1
    },
    {
      "caseName": "Case 2", "id": 2
    },
    {
      "caseName": "Case 3", "id": 3
    },
    {
      "caseName": "Case 4", "id": 4
    },
    {
      "caseName": "Case 5", "id": 5
    },
    {
      "caseName": "Case 6", "id": 6
    },
    {
      "caseName": "Case 7", "id": 7
    },
    {
      "caseName": "Case 8", "id": 8
    },
  ];
}
