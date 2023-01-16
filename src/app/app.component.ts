import { Component } from '@angular/core';
import { WikipediaService, PageTypes } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: PageTypes[] = [];

  searchTerm = '';
  constructor(private wikipedia: WikipediaService) {}
  onTermSubmitted = (term: string) => {
    this.searchTerm = term;
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages;
    });
  };
}
