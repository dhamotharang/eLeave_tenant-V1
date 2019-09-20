import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationServiceService {

  config: any;

  constructor() { }

  pageConfig(itmPg, initPg, mxItm) {
    const conf = {
      itemsPerPage: itmPg,
      currentPage: initPg,
      totalItems: mxItm
    };
    return conf;
  }
}
