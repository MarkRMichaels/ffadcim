import { Component, OnInit } from '@angular/core';
import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  numberOfPlayers;
  player0Name;
  player1Name;
  player2Name;
  player3Name;

  numberOfPlayersSelected;
  namesOfPlayersSelected;

  constructor() {
    this.numberOfPlayersSelected = false;
    this.namesOfPlayersSelected = false;
    this.player0Name = "Empty";
    this.player1Name = "Empty";
    this.player2Name = "Empty";
    this.player3Name = "Empty";
  }

  setPlayerName(value1: string, value2: string, value3: string, value4: string) {
    if (this.numberOfPlayers > 0)
      this.player0Name = value1;
    if (this.numberOfPlayers > 1)
      this.player1Name = value2;
    if (this.numberOfPlayers > 2)
      this.player2Name = value3;
    if (this.numberOfPlayers > 3)
      this.player3Name = value4;

      this.namesOfPlayersSelected = true;
  }

  func(){
    
  }

  ngOnInit() {
  }

}
