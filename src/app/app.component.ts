import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [];
  searchTerm = '';
  constructor(private wikipedia: WikipediaService) {}
  onTermSubmitted = (term: string) => {
    this.searchTerm = term;
    this.wikipedia.search(term).subscribe((res: any) => {
      this.pages = res.query.search;
    });
  };
}
