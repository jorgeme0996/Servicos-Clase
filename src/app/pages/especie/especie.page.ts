import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PokeApiService } from 'src/app/servicios/poke-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-especie',
  templateUrl: './especie.page.html',
  styleUrls: ['./especie.page.scss'],
})
export class EspeciePage implements OnInit, AfterViewInit {

  pokemon: any = {}

  abilities:any[]  = []

  constructor(private pokeApi: PokeApiService, private route: ActivatedRoute) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id")
    //const id = this.route.snapshot.paramMap.get("id")
    this.pokeApi.getPokemon(id).subscribe((data:any)=>{
      this.pokemon = data
      for(let ability of this.pokemon.abilities){
        this.pokeApi.getAbility(ability.ability.url).subscribe((data:any)=>{
          this.abilities.push(data);          
        })
      }
      console.log(this.abilities);
    })
  }

}
