import { Character } from "./character";

export class Player {
    constructor(name){
        this.name = name;
    }
    name: string;
    pickOrder: number;
    commanderInCheif: Character;
    general: Character;
    colonel: Character;
    major: Character;
    captain: Character;
    lieutenant: Character;
    sergeant: Character;
    private: Character;
}


// commanderInCheif; //main
// general: string; //first pick (fox, marth, falco, sheik, peach, puff)
// colenel: string; //back up first pick/second pick (generals if available or if yours is taken + falcon, ganon, luigi, doc, mario)
// major: string; //second/third pick (falcon, ganon, samus luigi, doc, mario, dk, )
// captain: string; //third/fourth pick (doc, mario, dk, pika, yoshi)
// lieutenant: string; //staple lowtier/lastpick (most cultivated last pick)
// sergeant: string; //trash pick (pichu, bowser, roy, mewtwo, zelda, ness, kirby,)
// private: string; //trash pick (pichu, bowser, roy, mewtwo, zelda, ness, kirby)
