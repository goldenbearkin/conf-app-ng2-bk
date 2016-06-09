import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgFor } from '@angular/common'
import { TalkComponent } from '../talk/talk.component'

import { Talk } from '../shared/talk.model'

@Component({
  moduleId: module.id,
  selector: 'app-talks',
  templateUrl: 'talks.component.html',
  styleUrls: ['talks.component.css'],
  directives: [
    NgFor,
    TalkComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalksComponent {
  @Input() talks: Talk[];
  @Output() watch = new EventEmitter();
  @Output() rate = new EventEmitter();
}
