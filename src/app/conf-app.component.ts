import { Component, OnInit } from '@angular/core';
import { FiltersComponent } from './filters/filters.component'
import { TalksComponent } from './talks/talks.component'

import { Talk } from './shared/talk.model';
import { ConfService } from './shared/conf.service'
import { FilterSpeaker } from './shared/filter-speaker.pipe'

import { List } from 'immutable'

@Component({
  moduleId: module.id,
  selector: 'conf-app',
  templateUrl: 'conf-app.component.html',
  styleUrls: ['conf-app.component.css'],
  pipes: [
    FilterSpeaker
  ],
  directives: [
    FiltersComponent,
    TalksComponent
  ],
  providers: [
    ConfService
  ]
})
export class ConfAppComponent implements OnInit {
  public talks = List<Talk>();
  public speaker = '';

  constructor(public confService: ConfService) {}

  ngOnInit() {
    this.confService.getAllTalks().then(talks => {
      this.talks = talks;
    });
  }

  public onFilter(event) {
    this.speaker = event;
  }

  public onWatch(event) {
    let key = this.talks.findIndex(e => e.id === event);
    this.talks = this.talks.update(key, talk => {
      return this.confService.setTalkWatched(talk);
    });
  }

  public onRate(event) {
    let key = this.talks.findIndex(e => e.id === event);
    this.talks = this.talks.update(key, talk => {
      return this.confService.setTalkRated(talk);
    });
  }
}
