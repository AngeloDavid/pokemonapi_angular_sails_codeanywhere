import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import {PokemonService} from './services/pokemon.service';
import { PokemonesComponent } from './components/pokemones/pokemones.component'
import {APP_ROUTING} from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
