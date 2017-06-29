import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../../app/interfaces/Pokem';
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: []
})
export class PokemonComponent implements OnInit {

  private id:string;
  Pokemon: Pokemon ={
    nombre: "",
    bio: "",
    url: "assets/Bulbasaur.png",
    tipo: ""
  };

  constructor(private _SP:PokemonService, private _router: Router, private _actR:ActivatedRoute) {
    this._actR.params.subscribe( params=>{
      this.id=params['id'];
      if(this.id!=='nuevo'){
        this._SP.getPokemon(this.id).subscribe( resultado=>{
          this.Pokemon=resultado;
        });
      }
    });
  }

  ngOnInit() {
  }
  guardar(){
    if(this.id=='nuevo') {
      this._SP.nuevoPokemon(this.Pokemon).subscribe(
        data => {
          console.log(data.id);
          this._router.navigate(['/pokemon', data.id]);
        },
        error => {
          console.log(error);
        }
      );
    }else{
      this._SP.editarPokemon(this.Pokemon,this.id).subscribe(
        data => {
          console.log(data.name);
          this._router.navigate(['/pokedex']);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
