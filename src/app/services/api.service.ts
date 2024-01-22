import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl: string = "http://localhost:3000";
  public gamesUrl: string = `${this.baseUrl}/games`

  constructor( private http:HttpClient) { }

  public getGames(){
    return this.http.get(this.gamesUrl)
    
      }
    
      public gamesById (id:string){
        return this.http.get(`${this.gamesUrl}/${id}`)
      }
    
      public postGames (game:any){
        return this.http.post(this.gamesUrl, game)
      }
      
      public deleteGames (id:string){
    return this.http.delete (`${this.gamesUrl}/${id}`)
    
      }
      public modificarGames (id:string, game:any){
        return this.http.patch(`${this.gamesUrl}/${id}`, game)
      }

}
