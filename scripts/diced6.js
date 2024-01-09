import Dice from "./dice.js";

export class DiceD6 extends Dice {
  constructor(
    diceSrc,
    place,
    template,
    button,
    diceValue,
    name,
    needImg,
    gameAlert
  ) {
    super(diceSrc, place, template, button, diceValue, name);
    this.needImg = needImg;
    this.gameAlert = gameAlert;
  }
  _rollDice(result, container, button) {
    super._rollDice(result, container, button);
    this.getResult();
    if (this.result === "-") {
      result.classList.add("dice-red");
    }
    if (this.result === "2") {
      setTimeout(() => {
        this.needImg.classList.remove("blocked-dice");
      }, 500);
    }
    this.gameAlert.textContent = "";
  }
  getResult() {
    super.getResult();
  }
}
