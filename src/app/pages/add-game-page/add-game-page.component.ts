import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-game-page',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './add-game-page.component.html',
  styleUrl: './add-game-page.component.css'
})
export class AddGamePageComponent {

  constructor(private servicio: ApiService){}

  public games:any = {

    title: "",
    genre: "",
    platform: "",
    release_date: "",
    description: "",
    developer: "",
    publisher: "",
    image: ""
  }

  addGame(){
    this.servicio.postGames(this.games).subscribe();
  }

}
