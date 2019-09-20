import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  constructor() { }
  filerSearch(searchKeyword, data, arg) {
    return data.filter(itm => new RegExp(searchKeyword, 'i').test(itm[arg]));
  }
}
