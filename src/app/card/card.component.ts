import { Component, Input } from '@angular/core';
import { User } from '../models/user';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title!: string;
  @Input() name!: string;
  @Input() picture!: string;
}
