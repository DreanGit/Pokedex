import { Component, Input, OnInit } from '@angular/core';
import { PokemonPreview } from 'src/app/models/pokemon-models';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit{
  @Input() pokemon!: PokemonPreview;

  constructor() { }

  ngOnInit(): void {
  }
  
}
