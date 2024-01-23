import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-content-page',
  standalone: true,
  imports: [],
  providers: [ApiService],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.css'
})
export class ContentPageComponent {
  @Input() games:any;
  constructor(private apiService:ApiService){
    this.apiService.getGames().subscribe((res:any)=>{
      this.games = res;
      console.log(res)
    })
  }

}

