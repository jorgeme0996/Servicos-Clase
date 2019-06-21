import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CancionesService {

  constructor() { }

  guardarCancionEnDB(cancion){
    console.log('Recibí canción', cancion);
  }
}
