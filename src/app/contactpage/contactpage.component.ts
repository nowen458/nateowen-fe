import { Component, OnInit } from '@angular/core';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-contactpage',
    templateUrl: './contactpage.component.html',
    styleUrls: ['./contactpage.component.css'],
    standalone: false
})
export class ContactpageComponent implements OnInit {
  address = faAddressBook;

  constructor() { }

  ngOnInit() {
  }

}
