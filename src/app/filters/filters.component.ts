import { Component, Output, EventEmitter } from '@angular/core';
import { MdInput } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
  styleUrls: ['filters.component.css'],
  directives: [
    MdInput,
    MdButton
  ]
})
export class FiltersComponent {
  @Output() filter = new EventEmitter();
  public speaker = '';

  constructor() {}

  public onClick() {
    this.filter.emit(this.speaker);
  }
}
