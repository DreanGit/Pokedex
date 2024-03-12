export interface PokemonPreview {
    name: string;
    imageUrl: string;
  }

  export interface PokemonDetail {
    id: number;
    name: string;
    imageUrl: string;
    height: number;
    weight: number;
    abilities: string[];
    types: string[];
    stats: Stat[];
  }

  export interface Stat {
    name: string;
    value: number;
  }