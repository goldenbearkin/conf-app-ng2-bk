import { Injectable } from '@angular/core';
import { Talk } from './talk.model';

import { List } from 'immutable';



@Injectable()
export class ConfService {
  private _talks = List<Talk>();

  constructor() {
    const TALKS: Talk[] = [
      {
        id: 1,
        title: "Intro to Flux and Redux",
        speaker: "Joseph",
        avgRating: 8.7,
        watched: false,
        rated: false
      },
      {
        id: 2,
        title: "OneSky's take on using redux with AngularJs",
        speaker: "Roger",
        avgRating: 7.8,
        watched: false,
        rated: false
      },
      {
        id: 3,
        title: "Why Functional Programming is so good with Scala?",
        speaker: "Cherry",
        avgRating: 9.8,
        watched: false,
        rated: false
      },
      {
        id: 4,
        title: "Stuff at our Startup powered by Scala",
        speaker: "Jimmy",
        avgRating: 8.1,
        watched: false,
        rated: false
      },
      {
        id: 5,
        title: "Intro to AWS Lambda, when to use?",
        speaker: "Vincent",
        avgRating: 6.8,
        watched: false,
        rated: false
      },
      {
        id: 6,
        title: "Managing Lambda with Apex",
        speaker: "Roger",
        avgRating: 8.3,
        watched: false,
        rated: false
      },
      {
        id: 7,
        title: "Angular2 vs ReactJS",
        speaker: "Jason",
        avgRating: 5.0,
        watched: false,
        rated: false
      }
    ];

    TALKS.map(e => this._talks = this._talks.unshift(new Talk(e)));
  }

  public getAllTalks(): Promise<List<Talk>> {
    return Promise.resolve(this._talks);
  }

  public getTalksBySpeaker(speaker: string): Promise<List<Talk>> {
    return Promise.resolve(this._talks).then(
      talks => talks.filter(talk => talk.speaker === speaker)
    );
  }

  public setTalkWatched(talk: Talk): Talk {
    return new Talk({
            id: talk.id,
            title: talk.title,
            speaker: talk.speaker,
            avgRating: talk.avgRating,
            watched: true,
            rated: talk.rated
        })
  }

  public setTalkRated(talk: Talk): Talk {
    return new Talk({
            id: talk.id,
            title: talk.title,
            speaker: talk.speaker,
            avgRating: 10,
            watched: talk.watched,
            rated: true
        })
  }
}