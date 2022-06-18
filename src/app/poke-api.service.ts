import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  pokemons = [];

  constructor(private httpClient: HttpClient) {
    this.loadPpokemons();
  }


  async loadPpokemons() {
    const request =
      await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
        .toPromise();

    this.pokemons = request.results;
    console.log(this.pokemons)
  }
}
