import { Component, OnInit } from '@angular/core';
import { PokemonPreview } from '../../models/pokemon-models';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-gallery',
  templateUrl: './pokemon-gallery.component.html',
  styleUrls: ['./pokemon-gallery.component.css']
})
export class PokemonGalleryComponent implements OnInit {
  pokemonPreviews: PokemonPreview[] = [];
  limit = 20;
  offset = 0;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.pokemonService.getAllPokemon(this.limit, this.offset).subscribe({
      next: (pokemons) => {
        this.pokemonPreviews = [...this.pokemonPreviews, ...pokemons];
        this.offset += pokemons.length;
      },
      error: (err) => console.error('Error fetching pokemons: ', err)
    });
  }

  loadMore(): void {
    this.loadPokemons();
  }
}
