import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent {
  @Output() submitted = new EventEmitter<string>();
  term = '';

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.submitted.emit(this.term);
  };
}
