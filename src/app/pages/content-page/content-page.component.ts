import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content-page',
  standalone: true,
  imports: [RouterLink],
  providers: [ApiService],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.css',
})
export class ContentPageComponent {

  @Input() games:any;
  constructor(private apiService:ApiService){
    this.apiService.getGames().subscribe((res:any)=>{

  games: any;
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.getGames().subscribe((res: any) => {

      this.games = res;
      console.log(res);
    });
  }



  logMe() {
    console.log();
  }
  setGameToEdit = (game: any) => {
    this.apiService.setItemToEdit(game);
    console.log(game);
  };

}
