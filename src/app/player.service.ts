import { Injectable, Output, EventEmitter } from '@angular/core';
import { Player } from './player';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players: Player[] = [];
  characterSelected = false;
  getPlayers() {
    return this.players;
  }

  getCharacter(char: Character) {
    return char;
  }

  iconClicked() {
    this.characterSelected = true;
  }

  constructor() { 
    this.players.push(new Player("Mark"));
    this.players.push(new Player("Brian"));
    this.players.push(new Player("Jake"));
    this.players.push(new Player("Boyd"));
  }
}
