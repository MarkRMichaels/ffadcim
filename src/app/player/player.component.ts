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
  numberOfPlayers;
  playerIndex;
  drafting;
  Stocks;

  constructor(public playerService: PlayerService) {
    this.players = this.playerService.getPlayers();

    this.numberOfPlayers = 2;
    this.playerIndex = -1;

  }

  setCharacter(char: Character) {
    if(char === undefined)
      this.playerIndex = -1;
    else if (this.players[this.playerIndex].general === undefined)
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

    if(this.playerIndex === this.numberOfPlayers - 1)
      this.playerIndex = 0;
    else
      this.playerIndex++;
  }

  deletStocks(amount: number, target: Character){
      console.log(target.stocks);

      while(target.stocks > amount)
      {
        target.stocks--;
      }

      console.log(target.stocks); 
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.setCharacter(this.character);
    // this.players.forEach(function(element){
    //   this.player.general.Stocks = 0; 
    //   this.player.colonel.Stocks = 0; 
    //   this.player.major.Stocks = 0; 
    //   this.player.captain.Stocks = 0;
    //   this.player.sergeant.Stocks = 0;
    //   this.player.private.Stocks = 0;
    //   });
  }
}
