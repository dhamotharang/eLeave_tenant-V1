import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';


/**
 * This component is to configure the snack bar's notification
 * @export
 * @class SnackBarComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
})
export class SnackBarComponent implements OnInit {

  /**
   * Creates an instance of SnackBarComponent.
   * @param {*} data This property is to bind data of snack bar
   * @memberof SnackBarComponent
   */
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }

  /**
   * This method is to set initial value for property in this component
   * @memberof SnackBarComponent
   */
  ngOnInit() {}

}
