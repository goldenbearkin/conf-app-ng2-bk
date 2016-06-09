import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MdCard } from '@angular2-material/card';
import { MdButton } from '@angular2-material/button'

import { Talk } from '../shared/talk.model';

@Component({
  moduleId: module.id,
  selector: 'app-talk',
  templateUrl: 'talk.component.html',
  styleUrls: ['talk.component.css'],
  directives: [
    MdCard,
    MdButton
  ]
})
export class TalkComponent {
  @Input() talk: Talk;
  @Output() watch = new EventEmitter();
  @Output() rate = new EventEmitter();
  
  public onClickWatch() {
    this.watch.emit(this.talk.id); 
  }

  public onClickRate() {
    this.rate.emit(this.talk.id);
  }
}
