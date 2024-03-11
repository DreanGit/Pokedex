import { Component, OnInit } from '@angular/core';

import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.css']
})
export class DropdownFilterComponent implements OnInit {
  isDropdownActive = false;
  selectedType: any;
  types: any[] = [];

  constructor(private pokemonService: PokemonService)  {}

  ngOnInit(): void {
    this.pokemonService.getPokemonTypes().subscribe((types) => {
      this.types = types;
    })
  }

}
