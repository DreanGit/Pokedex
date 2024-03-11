export interface PokemonPreview {
    name: string;
    imageUrl: string;
    attack: number;
  }

  export interface PokemonDetail {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: string[];
    types: string[];
  }