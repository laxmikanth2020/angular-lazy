import { Component, OnInit } from '@angular/core';
import { topics } from '../../models/topics.data';
import { htmlData } from 'src/app/models/html.subtopics';
import { cssData } from 'src/app/models/css.subtopics';
import { javascriptData } from 'src/app/models/javascript.subtopics';
import { bootstrapData } from 'src/app/models/bootstrap.subtopics';
import { AngularData } from 'src/app/models/angular.subtopics';
import { rxjsData } from 'src/app/models/rxjs.subtopics';
import { ngrxData } from 'src/app/models/ngrx.subtopics';
import { jasmineKarmaData } from 'src/app/models/jasminekarma.subtopics';
import { DataTransferService } from '../../services/data-transfer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  topicsData = topics;
  selectedTopic: string = 'HTML';

  constructor(private data: DataTransferService, private router: Router) {}

  ngOnInit() {
    if (this.router.url === '/' || this.router.url === '') {
      this.router.navigate(['html']);
    }
  }

  chooseTopic(val: string) {
    this.selectedTopic = val;
    switch (val) {
      case 'HTML':
        this.data.transferTopic(htmlData);
        break;
      case 'CSS':
        this.data.transferTopic(cssData);
        break;
      case 'JavaScript':
        this.data.transferTopic(javascriptData);
        break;
      case 'BootStrap':
        this.data.transferTopic(bootstrapData);
        break;
      case 'Angular':
        this.data.transferTopic(AngularData);
        break;
      case 'RXJS':
        this.data.transferTopic(rxjsData);
        break;
      case 'NGRX':
        this.data.transferTopic(ngrxData);
        break;
      case 'Jasmine&Karma':
        this.data.transferTopic(jasmineKarmaData);
        break;
      default:
        this.data.transferTopic(htmlData);
        break;
    }
    this.data.selectedTopicIndex({ name: this.selectedTopic, val: 0 });
  }
}
