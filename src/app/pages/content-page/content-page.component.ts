import { ApiService } from './../../services/api.service';
import { Component, Input } from '@angular/core';
import { FilterGameComponent } from '../../filter-game/filter-game.component';
import { RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-page',
  standalone: true,

  imports: [RouterLink, FilterGameComponent, FormsModule],

  providers: [ApiService],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.css',
})
export class ContentPageComponent {
  @Input() games: any;//---
 

  

  constructor(private apiService: ApiService) {

 
  }

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

  getGames (){
    this.apiService.getGames().subscribe((res: any) => {
      this.games = res;
  })
}
searchGame: any = '';
  result: any[] = [];
  restablecerGames: any[] = []


  searchGames() {
    this.restablecerGames = [...this.games]
    const lowerCaseTerm = this.searchGame.toLowerCase();

   
    this.games = this.restablecerGames.filter( (game: any) => 
      game.title.toLowerCase().includes(lowerCaseTerm));
   this.result = this.games 
  }
   restablecer() {
    this.games = [...this.restablecerGames]; // Restablecer a la lista original
   // this.result = []; // Limpiar los resultados de búsqueda
    this.searchGame = ''; // Limpiar el término de búsqueda
  }
      
}