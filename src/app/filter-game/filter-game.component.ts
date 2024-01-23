import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-filter-game',
  standalone: true,
  imports: [],
  templateUrl: './filter-game.component.html',
  styleUrl: './filter-game.component.css'
})
export class FilterGameComponent {


  @Output () filterEmitter = new EventEmitter
  filter (){


  }
}
