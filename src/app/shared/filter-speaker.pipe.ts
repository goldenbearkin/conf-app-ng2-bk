import { Pipe, PipeTransform } from '@angular/core';
import { Talk } from './talk.model';

@Pipe({
  name: 'filterSpeaker'
})
export class FilterSpeaker implements PipeTransform {

  transform(talks: Talk[], speaker: string): Talk[] {
    if (speaker === '') {
      return talks;
    } else {
      return talks.filter(talk => talk.speaker === speaker);
    }
  }
}
