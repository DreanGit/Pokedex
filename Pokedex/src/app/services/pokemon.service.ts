import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, forkJoin } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { PokemonPreview, PokemonDetail } from '../models/pokemon-models';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  // getAllPokemon(limit: number = 20, offset: number = 0): Observable<PokemonPreview[]> {
  //   return this.http.get<any>(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`)
  //   .pipe(
  //     map((response: any) => response.results.map((pokemon: any) => {
  //       return {
  //         name: pokemon.name,
  //         imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/').filter(Boolean).pop()}.png`,
  //         strength: 2,
  //       } as PokemonPreview;
  //     })),
  //     catchError(error => throwError(error))
  //   );
  // }
  
  getAllPokemon(limit: number=20, offset: number=0)

  getPokemonDetail(pokemonName: string): Observable<PokemonDetail> {
    return this.http.get<any>(`${this.apiUrl}/pokemon/${pokemonName}`)
    .pipe(
      map(response => {
        return {
          id: response.id,
          name: response.name,
          height: response.height,
          weight: response.weight,
          abilities: response.abilities.map((a: any) => a.ability.name),
          types: response.types.map((t: any) => t.type.name),
          stats: response.stats.map((stat: any) => {
            return{
              name: stat.stat.name,
              value: stat.base_stat
            };
          })
        } as PokemonDetail;
      }),
      catchError(error => throwError(error))
    );
  }

  getPokemonTypes(): Observable<any>{
    return this.http.get(`${this.apiUrl}/type`)
    .pipe(
      map((response: any) => response.results.map((type:any) => ({
        name: type.name,
        value: type.url.split('/').filter(Boolean).pop()
      }))),
      catchError(error => throwError(error))
    );
  }

  private handleError(error: any) {
    console.error('Error in PokemonService',error);
    return throwError(() => new Error('Something bad happened: please try again later'))
  }

}
