import Dice from "./dice.js";

export class DiceD6 extends Dice {
  constructor(diceSrc, place, template, button, diceValue, name, needImg) {
    super(diceSrc, place, template, button, diceValue, name);
    this.needImg = needImg;
  }
  _rollDice(result, container, button) {
    super._rollDice(result, container, button);
    this.getResult();
    if (this.result === "-") {
      result.classList.add("dice-red");
    }
    if (this.result === "2") {
      this.needImg.classList.remove("blocked-dice");
    }
  }
  getResult() {
    super.getResult();
  }
}
