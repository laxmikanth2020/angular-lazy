import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { htmlData } from '../models/html.subtopics';

@Injectable({
  providedIn: 'root',
})
export class DataTransferService {
  constructor() {}

  selectedTopic = new BehaviorSubject<{ name: string; route: string }[]>(
    htmlData
  );
  currentTopic$ = this.selectedTopic.asObservable();

  topicIndex = new BehaviorSubject<{ name: string; val: number }>({
    name: 'HTML',
    val: 0,
  });
  currentTopicIndex$ = this.topicIndex.asObservable();

  transferTopic(data: any) {
    this.selectedTopic.next(data);
  }

  selectedTopicIndex(data: any) {
    this.topicIndex.next(data);
  }
}
