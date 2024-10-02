import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService  {

  public characters: Character[] = [
    {id:uuid(),name:'krillin',power:600,},
    {id:uuid(),name:'Goku', power:150000},
    {id:uuid(),name:'Veggeta', power:5000}
  ];

  addCharacter( character:Character ):void{

    const newCharacter:Character = { id: uuid(), ...character};

    this.characters.push(newCharacter);
  }

  deleteCharacterById( id:string ){
  this.characters = this.characters.filter( characters => characters.id !== id );
  }
}
