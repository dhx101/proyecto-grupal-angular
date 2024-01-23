import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FilterGameComponent } from '../../filter-game/filter-game.component';

@Component({
  selector: 'app-content-page',
  standalone: true,
  imports: [FilterGameComponent],
  providers: [ApiService],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.css'
})
export class ContentPageComponent {
  games:any;
  constructor(private apiService:ApiService){
    this.apiService.getGames().subscribe((res:any)=>{
      this.games = res;
      console.log(res)
    })
  }
}

