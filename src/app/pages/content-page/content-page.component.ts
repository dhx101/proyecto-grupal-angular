import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-page',
  standalone: true,
  imports: [],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.css'
})
export class ContentPageComponent {
  @Input() games: any[]=[]
}
