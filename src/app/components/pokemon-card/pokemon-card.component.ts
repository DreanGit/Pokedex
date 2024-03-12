import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonPreview } from 'src/app/models/pokemon-models';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() pokemon!: PokemonPreview;

  constructor(private router: Router) { }

viewDetails(): void {
  this.router.navigate(['/pokemon', this.pokemon.name])
}
  
}
