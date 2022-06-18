import { Component } from '@angular/core';
import { PokeApiService } from '../poke-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  constructor(public pokemonApi: PokeApiService) {

  }


}
