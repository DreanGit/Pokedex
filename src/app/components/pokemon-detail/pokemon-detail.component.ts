import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonDetail } from 'src/app/models/pokemon-models';
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemonName: string = '';
  pokemonDetail: PokemonDetail | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pokemonName = params['name'];
      this.loadPokemonDetail();
    });
  }

  loadPokemonDetail(): void {
    this.pokemonService.getPokemonDetail(this.pokemonName)
    .subscribe(detail => {
      this.pokemonDetail = detail;
    })
  }

  get hpValue() {
    return this.pokemonDetail?.stats.find(stat => stat.name === 'hp')?.value ?? 'N/A';
  }
  
  get specialAttackValue() {
    return this.pokemonDetail?.stats.find(stat => stat.name === 'special-attack')?.value ?? 'N/A';
  }

}
