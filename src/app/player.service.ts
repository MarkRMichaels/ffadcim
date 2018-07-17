import { Injectable, Output, EventEmitter } from '@angular/core';
import { Player } from './player';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players: Player[] = [];
  characterSelected = false;
  numberOfPlayers;
  playersLoaded = false;
  drafting = false;

  getPlayers() {
    return this.players;
  }

  getCharacter(char: Character) {
    return char;
  }

  iconClicked() {
    this.characterSelected = true;
  }

  addPlayer(playerName, totalNumberOfPlayers){
    this.numberOfPlayers = totalNumberOfPlayers;
    this.players.push(new Player(playerName));
    this.playersLoaded = true;
    this.drafting = true;
  }

  constructor() { 

  }
}
