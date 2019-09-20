import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  constructor() { }

  filterClientList(searchTerm, data) {
    return data.filter(it => new RegExp(searchTerm, 'i').test(it.clientName));
  }
}
