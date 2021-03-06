import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokeApiService } from './poke-api.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PokeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
