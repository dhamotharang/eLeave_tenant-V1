import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-subscriber',
  templateUrl: './add-new-subscriber.page.html',
  styleUrls: ['./add-new-subscriber.page.scss'],
})
export class AddNewSubscriberPage implements OnInit {

  constructor() { }

  public users: any[] = [
    {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    }
  ];
  
  ngOnInit() {
  }

}
