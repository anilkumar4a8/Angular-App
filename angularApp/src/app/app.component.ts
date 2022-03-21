import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchLabel = 'SSN';
  memberLookupForm = new FormGroup({
    ssn: new FormControl(''),
    accountNumber: new FormControl(''),
    dos: new FormControl(''),
  });
  //Receiving data from child component.
  dataReceived(data) {
    //alert(data);
    this.searchLabel = data;
  }

  onSubmit() {
    console.log(this.memberLookupForm.value);
    this.memberLookupForm.reset();
  }
}
