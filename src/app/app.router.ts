/**
 * Created by Usuario01 on 15/06/2017.
 */
import  {Routes,RouterModule } from '@angular/router';
import {PokemonComponent} from '../app/components/pokemon/pokemon.component';
import {PokemonesComponent} from '../app/components/pokemones/pokemones.component';

const APP_ROUTES: Routes=[
  {path:'pokemon/:id', component: PokemonComponent},
  {path:'pokedex', component: PokemonesComponent},
  {path:'**', pathMatch: 'full',redirectTo: 'pokedex'}
];


export const APP_ROUTING =RouterModule.forRoot(APP_ROUTES);
