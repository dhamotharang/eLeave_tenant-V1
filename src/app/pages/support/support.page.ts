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
  public requestLength: number;
  public pendingVal: number = 0;
  public approvedVal: number = 0;
  public rejectedVal: number = 0;
  public showSpinner: boolean = true;
  public clickedIndex: number;
  public url: any;
  public selectedDetails: any;
  public conversationList: any;
  public fileTypeOutput: string;


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
    this.getSupportList().pipe(
      map(data => {
        this.suggestLength = data.suggestion.length;
        this.requestLength = data.request.length;
        let value = data.request.concat(data.suggestion);
        value.sort((a, b) => new Date(b.CREATION_TS).getTime() - new Date(a.CREATION_TS).getTime());
        this.supportList = value;
        // for (let i = 0; i < this.supportList.length; i++) {
        //   if (this.supportList[i].STATUS != undefined) {
        //     if (this.supportList[i].STATUS === 'pending') {
        //       this.pendingVal++
        //     }
        //     if (this.supportList[i].STATUS === 'approved') {
        //       this.approvedVal++
        //     }
        //     if (this.supportList[i].STATUS === 'rejected') {
        //       this.rejectedVal++
        //     }
        //   }
        // }
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
   * select message to view details info
   * @param {number} i
   * @param {*} data
   * @memberof SupportPage
   */
  selectedMessage(i: number, data) {
    this.clickedIndex = i;
    this.selectedDetails = data;
    let fileType = this.selectedDetails.ATTACHMENT.split('.');
    this.fileTypeOutput = fileType.pop();
    // this.supportApi.get_support_conversation_id(data.SUPPORT_GUID).subscribe(data => {
    //   this.conversationList = data;
    //   for (let i = 0; i < this.conversationList.length; i++) {
    //     let type = this.conversationList[i].ATTACHMENT.split('.');
    //     this.conversationList[i]["type"] = type.pop();
    //   }
    // })
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
