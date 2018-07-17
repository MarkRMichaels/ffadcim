import { Component, OnInit, } from '@angular/core';
import { Character } from '../character';
import { CHARACTERS } from '../roster';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
 
  characters = CHARACTERS;
  selectedCharacter: Character;
  display = false;

  onSelect(character: Character): Character {
    console.log(this.playerService.numberOfPlayers);
    this.selectedCharacter = character;
    this.playerService.iconClicked()
    this.characters.splice(this.characters.indexOf(this.selectedCharacter), 1);
    return character;
  }

  constructor(public playerService: PlayerService) {
    
  }

  ngOnInit() {

  }

  ngDoCheck() {
    if(this.playerService.drafting === true)
      this.display = true;
    else
      this.display = false;

    console.log("draftiG? " + this.playerService.drafting);
  }

}
