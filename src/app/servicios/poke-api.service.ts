import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  getPokemon(nombreONum){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${nombreONum}/`)
  }

  getAbility(url){
    return this.http.get(url)
  }
}