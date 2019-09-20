import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationServiceService {

  config: any;
  private initPage;
  private itemPage;
  private maxItem;

  constructor() { }

  pageConfig(itmPg, initPg, mxItm) {
    console.log('in page config');
    // console.log(initPg + '  ' + itmPg + '  ' + mxItm);
    // this.initPage = initPg;
    // this.itemPage = itmPg;
    // this.maxItem = mxItm;
    // console.log(this.config);
    const conf = {
      itemsPerPage: itmPg,
      currentPage: initPg,
      totalItems: mxItm
    };
    console.log(conf);
    return conf;
    // return {
    //   itemsPerPage: initPg,
    //   currentPage: itmPg,
    //   totalItems: mxItm
    // };
  }
}
