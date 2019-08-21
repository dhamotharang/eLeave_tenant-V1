import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-customer-popover',
  templateUrl: './customer-popover.component.html',
  styleUrls: ['./customer-popover.component.scss'],
})
export class CustomerPopoverComponent implements OnInit {

  public customerReportViewType = 'card';

  constructor( public popoverController: PopoverController) { }

  ngOnInit() {}

  close() {
    this.popoverController.dismiss();
  }

  doc() {
    window.open('https://ionicframework.com/docs', '_blank');
    this.popoverController.dismiss();
  }

  viewOption(viewType: string) {
    console.log('viewOption');
    console.log(viewType);
    this.popoverController.dismiss(viewType);
  }
}
