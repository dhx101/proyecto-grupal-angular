import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-game-page',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './edit-game-page.component.html',
  styleUrl: './edit-game-page.component.css',
})
export class EditGamePageComponent {
  gameId: any = 1;
  game: any = {
    id: '',
    title: '',
    genre: '',
    platform: '',
    release_date: '',
    description: '',
    developer: '',
    publisher: '',
    image: '',
  };
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.gameId = params.get('id');
      this.apiService.gamesById(this.gameId).subscribe((res: any) => {
        this.game = res;
      });
    });
    this.game = this.apiService.getItemToEdit();
    console.log(this.game);
  }

  editItem = () => {
    this.apiService.editItem(this.game, this.game.id).subscribe();

    console.log('Hecho');
  };

  deleteItem = () => {
    console.log(this.game.id);
    
    this.apiService.deleteItem(this.game.id).subscribe();
  };
  
  logMe() {
    console.log(this.game);
  }
}
