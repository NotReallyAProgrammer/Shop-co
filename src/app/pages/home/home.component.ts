import { Component, Input } from '@angular/core';
import { commentsData } from '../../dummy-data/comment-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() commentData = commentsData;
}
