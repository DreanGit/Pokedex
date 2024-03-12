import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchTerm: string = '';
  allPokemons: any[] = [];
  filteredPokemons: any[] = [];

  isSearching = false;
  isLoading = false;

  constructor(private snackBar: MatSnackBar, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  onSearch(): void {
    const value = this.searchTerm.toLowerCase();
    if(value === '') {
      this.filteredPokemons	= this.allPokemons;
      this.isSearching = false;
      this.isLoading = false;
    } else {
      this.isSearching = true;
      this.isLoading = true;

      this.filteredPokemons = this.allPokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(value)
        );

        this.isLoading = false;

        if(this.filteredPokemons.length === 0) {
          this.snackBar.open('Sorry, Pokemon not found', 'Ok', {
            duration: 5000,
          });
        }
    }
  }


  loadPokemons(): void {
    this.pokemonService.getAllPokemon().subscribe(data => {
      this.allPokemons = data;
      this.filteredPokemons = [...this.allPokemons];
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.error('Error loading Pokemons:', error)
    });
  }


}
