import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { APIService } from 'src/app/services/shared-service/api.service';
import { Observable } from 'rxjs';


/**
 * Component for SupportPage
 *
 * @export
 * @class SupportPage
 * @implements {OnInit}
 */
@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})

export class SupportPage implements OnInit {

  public supportList: any;
  public suggestLength: number;
  public pendingVal: number = 0;
  public approvedVal: number = 0;
  public rejectedVal: number = 0;
  public showSpinner: boolean = true;
  public clickedIndex: number;
  public url: any;
  public selectedDetails: any;
  public conversationList: any;
  public info: any;
  public message: any;


  /**
   * Creates an instance of SupportPage.
   * @memberof SupportPage
   */
  constructor(private apiService: APIService) { }


  /**
   * This method is to set initial value of properties. It will
   * be executed when Support page is executed
   * @memberof SupportPage
   */
  ngOnInit() {
    this.apiService.reqGetCurrUserDetails().subscribe(info => this.info = info)
    this.getSupportList().pipe(
      map(data => {
        this.suggestLength = data.suggestion.length;
        data.suggestion.sort((a, b) => new Date(b.CREATION_TS).getTime() - new Date(a.CREATION_TS).getTime());
        this.supportList = data.suggestion;
        this.showSpinner = false;
      })
    ).subscribe(list => { })
  }

  /**
   * get all support list 
   * @returns {Observable<any>}
   * @memberof SupportPage
   */
  getSupportList(): Observable<any> {
    return this.apiService.getApi('/support');
  }

  /**
   * get support conversation list by id
   * @param {string} supportId
   * @returns {Observable<any>}
   * @memberof SupportPage
   */
  getSupportById(supportId: string): Observable<any> {
    return this.apiService.getApi('/support/' + supportId);
  }

  /**
   * post suggestion message
   * @param {*} data
   * @returns {Observable<any>}
   * @memberof SupportPage
   */
  post_support_clarification(data): Observable<any> {
    return this.apiService.postApi(data, '/support/admin/clarification');
  }

  /**
   * select message to view details info
   * @param {number} i
   * @param {*} data
   * @memberof SupportPage
   */
  selectedMessage(i: number, data) {
    this.clickedIndex = i;
    this.selectedDetails = data;
    this.getSupportById(data.SUPPORT_GUID).subscribe(data => {
      this.conversationList = data;
    })
  }

  /**
   * reply message to the suggestion
   * @param {string} status
   * @memberof SupportPage
   */
  replyMessage(status: string) {
    const data = {
      "supportId": this.selectedDetails.SUPPORT_GUID,
      "userId": this.info[0].USER_GUID,
      "doc": '',
      "message": this.message,
      "status": status
    }
    this.post_support_clarification(data).subscribe(res => {
      if (res[0] != undefined) {
        this.message = '';
      }
      this.selectedMessage(this.clickedIndex, this.selectedDetails);
    })
  }

  /**
   * filter the keyup text from searchbar
   * @param {*} text
   * @memberof SupportPage
   */
  async filter(text: any) {
    if (text && text.trim() != '') {
      let description = this.supportList.filter((items: any) => {
        if (items.DESCRIPTION != undefined) {
          return (items.DESCRIPTION.toLowerCase().indexOf(text.toLowerCase()) > -1)
        }
      })

      let name = this.supportList.filter((items: any) => {
        if (items.FULLNAME != undefined) {
          return (items.FULLNAME.toLowerCase().indexOf(text.toLowerCase()) > -1)
        }
      })
      this.supportList = require('lodash').uniqBy(name.concat(description), 'SUPPORT_GUID');
    }
  }

  /**
   * To filter entered text
   * @param {*} text
   * @memberof SupportPage
   */
  changeDetails(value: any) {
    if (value === '') {
      this.ngOnInit();
    } else {
      this.filter(value);
    }
  }



}
