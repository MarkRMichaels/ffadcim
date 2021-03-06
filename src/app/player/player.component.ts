import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Character } from '../character';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() character: Character;
  players: Player[];
  charCounter: number;
  @Input() numberOfPlayers;
  playerIndex;
  Stocks;


  constructor(public playerService: PlayerService) {
    this.playerIndex = 0;
  }

  initPlayers() {
    console.log("Players Initialised");
    this.players = this.playerService.getPlayers();
    this.numberOfPlayers = this.playerService.numberOfPlayers;
    this.playerService.playersLoaded = false;
  }

  setCharacter(char: Character) {
    if (this.playerService.drafting) {
      if (this.players[this.playerIndex].general === undefined)
        this.players[this.playerIndex].general = char;
      else if (this.players[this.playerIndex].colonel === undefined)
        this.players[this.playerIndex].colonel = char;
      else if (this.players[this.playerIndex].major === undefined)
        this.players[this.playerIndex].major = char;
      else if (this.players[this.playerIndex].captain === undefined)
        this.players[this.playerIndex].captain = char;
      else if (this.players[this.playerIndex].sergeant === undefined)
        this.players[this.playerIndex].sergeant = char;
      else if (this.players[this.playerIndex].private === undefined)
        this.players[this.playerIndex].private = char;

      //resets the player index when it assigns a char to the last player
      if (this.playerIndex === this.numberOfPlayers - 1)
        this.playerIndex = 0;
      else
        this.playerIndex++;

      if (this.players[this.numberOfPlayers - 1].private != undefined) {
        this.playerService.drafting = false;
      }
    }
  }

  deletStocks(amount: number, target: Character) {
    target.stocks = amount;
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.setCharacter(this.character);
  }

  ngDoCheck() {
    if (this.playerService.playersLoaded) {
      this.initPlayers();
    }
  }

}
