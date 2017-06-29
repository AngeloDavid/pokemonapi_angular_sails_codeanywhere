import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import {Pokemon} from "../interfaces/Pokem";
import 'rxjs/Rx';

@Injectable()
export class PokemonService {

  BBSalis="http://port-1337.pokemonpry-angelodavid95426006.codeanyapp.com/Comic";
  BDDApipoke="http://pokeapi.co/api/v2/pokemon";

  constructor(private _http:Http) { }

  nuevoPokemon(Nuevo:Pokemon){
    let body=JSON.stringify(Nuevo);
    console.log(body);
    let headers1=new Headers({
      'Content-type': 'application/json'
    });

    return this._http.post(this.BBSalis,body,{headers:headers1}).map(res=>{
        console.log("hola");
        console.log(res.json);
        return  res.json();
      });
  }
  consultarPokemones(){
    return this._http.get(this.BBSalis).map(resp => {
      return  resp.json();
    } )
  }

  getPokemon(indice:string){
    let urlpoke =`${this.BBSalis}/${indice}`;
    return this._http.get(urlpoke).map(resp=>{
      return  resp.json();
    });
  }
  editarPokemon(pokemon:Pokemon, id:string){
    let body=JSON.stringify(pokemon);
    console.log(body);
    let headers1=new Headers({
      'Content-type': 'application/json'
    });
    let urlpoke=`${this.BBSalis}/${id}`;

    return this._http.put(urlpoke,body,{headers:headers1}).map(res=>{
      console.log('datos editados');
      return  res.json();

    });
  }
  eliminarPokemon(id:string){
    let urlpoke=`${this.BBSalis}/${id}`;
    return this._http.delete(urlpoke).map(resp=>{
      return  resp.json();
    });
  }

  ConsultarApiPokemon(){
    let urlPokesApi=`${this.BDDApipoke}/?limit=20`;
    return this._http.get(urlPokesApi).map(resp => {
      return  resp.json();
    } );
  }
  DatosApiPokemon(urlApi:string){
    return this._http.get(urlApi).map(resp => {
      return  resp.json();
    } );
  }
  getNamePokemon(nombre:string){
    let urlpoke =`${this.BBSalis}/?nombre=${nombre}`;
    return this._http.get(urlpoke).map(resp=>{
      return  resp.json();
    });
  }


}
