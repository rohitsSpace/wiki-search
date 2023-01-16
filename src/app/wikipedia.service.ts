import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export interface PageTypes {
  title: string;
  snippet: string;
  pageid: number;
  wordcount: number;
}

export interface WikipediaResponse {
  query: {
    search: PageTypes[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}
  search(term: string) {
    return this.http
      .get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          formatversion: '2',
          origin: '*',
          srsearch: term,
        },
      })
      .pipe(map((v) => v?.query?.search));
  }
}
