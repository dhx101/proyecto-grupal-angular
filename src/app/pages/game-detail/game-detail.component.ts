import { Component } from '@angular/core';
import { ContentPageComponent } from '../content-page/content-page.component';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [ContentPageComponent],
  providers:[ApiService],
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.css'
})
export class GameDetailComponent {
  gameId:any=1;
  game:any={};
  constructor(private route:ActivatedRoute, private apiService:ApiService){}
    
  ngOnInit(){
    this.route.paramMap.subscribe(params=>{
      this.gameId = params.get("id");
      this.apiService.gamesById(this.gameId).subscribe((res:any)=>{
        this.game = res;
      
      });
    });
  }
}
