import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  //child to parent communication using @output decerator
  @Output() sentDataEvent = new EventEmitter<string>();
  buttonClick(data) {
    //alert(data);
    this.sentDataEvent.emit(data);
  }
  searchData = ['SSN', 'PID', 'AMI', 'Name'];
  claimData = ['Proclaim', 'Facets', 'PMHS'];
}
