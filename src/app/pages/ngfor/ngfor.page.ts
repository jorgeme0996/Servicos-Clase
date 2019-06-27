import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../servicios/poke-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.page.html',
  styleUrls: ['./ngfor.page.scss'],
})
export class NgforPage implements OnInit {

  pokemon:any = {}

  constructor(private pokeApiService: PokeApiService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(formulario){
    const pokemonBuscado = formulario.form.value.nombre;

    this.pokeApiService.getPokemon(pokemonBuscado).subscribe((data:any)=>{
      console.log(data);
      this.pokemon = data;
    })
  }

  goEspecie(){
    this.router.navigate(['/especie', {id: this.pokemon.id}])
  }

}