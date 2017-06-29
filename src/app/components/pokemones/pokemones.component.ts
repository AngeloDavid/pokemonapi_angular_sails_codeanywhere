import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../interfaces/Pokem";
import {PokemonService} from "../../services/pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styles: []
})
export class PokemonesComponent implements OnInit {

  pokedex: Pokemon[]=[];
  pokesApi: Pokemon[] =[];
  urlsPokes:string[]=[];
  constructor(private _ps: PokemonService,  private _router: Router ) {
    this._ps.consultarPokemones().subscribe(
      resultado => { this.pokedex = resultado;
      }
    );
    this._ps.ConsultarApiPokemon().subscribe(
      resultado => {
        for (let poke of resultado.results) {
          this.urlsPokes.push(poke.url);
        }
        console.log(this.urlsPokes);
        for (let urls of this.urlsPokes) {
          this._ps.DatosApiPokemon(urls).subscribe(
            resultado=>{
              let pokeApi:Pokemon={
                nombre:'',
                bio:'',
                url:'',
                tipo:''
              };
              // pokeApi.id= resultado.id;
              pokeApi.nombre=resultado.forms[0].name;
              pokeApi.url=resultado.sprites.front_default;
              pokeApi.tipo=resultado.types[0].type.name;
              this.pokesApi.push(pokeApi);
              console.log(this.pokesApi);
            }
          );
        }
      }
    );

  }

  ngOnInit() {
  }
  eliminar(id:string,i:number){
    this._ps.eliminarPokemon(id).subscribe(
      resultado=>{
        this.pokedex.splice(i,1);
      }
    );
  }
  elegir(i:number){
    console.log(this.pokesApi[i]);
    /*
    );*/
    this._ps.getNamePokemon(this.pokesApi[i].nombre).subscribe(
      data => {
        console.log(data);
        if (data.length == 0 ) {
          this._ps.nuevoPokemon(this.pokesApi[i]).subscribe(
            data => {
              console.log(data);
              this._router.navigate(['/pokedex']);
              alert("Registro de pokemon exitoso");
            },
            error => {
              console.log(error);
            });
        }else{
          alert("Este pokemon ya está registrado en la Base de datos");
        }
      },
       error => {
        console.log(error);
       }
    );

  }


}
