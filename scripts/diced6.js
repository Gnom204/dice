import Dice from "./dice.js";

export class DiceD6 extends Dice {
  constructor(diceSrc, place, template, button, diceValue, name) {
    super(diceSrc, place, template, button, diceValue, name);
  }
}