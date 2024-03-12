import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonGalleryComponent } from './components/pokemon-gallery/pokemon-gallery.component';


const routes: Routes = [
  { path: '', redirectTo: '/pokemon-gallery', pathMatch: 'full' },
  { path: 'pokemon-gallery', component: PokemonGalleryComponent },
  { path: 'pokemon/:name', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
