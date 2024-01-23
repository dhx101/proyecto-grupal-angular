import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-game-page',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './edit-game-page.component.html',
  styleUrl: './edit-game-page.component.css',
})
export class EditGamePageComponent {
  constructor(private servicio: ApiService) {}
  elementToEdit: any = {};
  ngOnInit() {
    this.elementToEdit = this.servicio.getItemToEdit();
    console.log(this.elementToEdit);
    
  }

  logMe() {
    console.log(this.elementToEdit);
  }
  editGame = () => {
    this.servicio
      .modificarGames(this.elementToEdit.id, this.elementToEdit)
      .subscribe();
      console.log("HECHO");
      
  };
}
