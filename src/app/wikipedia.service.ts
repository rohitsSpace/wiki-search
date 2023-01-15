import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor() {}
  search(term: string) {
    return 'Im from search result ';
  }
}
