import { Component } from '@angular/core';
import { topics } from '../../models/topics.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  topicsData = topics;

}
