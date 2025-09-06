import { Component, OnInit } from '@angular/core';
import { ngrxData } from 'src/app/models/ngrx.subtopics';
import { route } from 'src/app/models/route.model';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { htmlData } from 'src/app/models/html.subtopics';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  subtopics: route[] = htmlData;
  topicTitle: string = 'HTML';
  subtiopicIndex: number = 0;
  constructor(private data: DataTransferService) {}

  ngOnInit() {
    this.data.currentTopic$.subscribe((val) => {
      this.subtopics = val;
    });

    this.data.currentTopicIndex$.subscribe((cod) => {
      this.topicTitle = cod.name;
      this.subtiopicIndex = cod.val;
    });
  }
}
