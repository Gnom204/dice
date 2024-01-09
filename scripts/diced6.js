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
    gameAlert,
    renderD30
  ) {
    super(diceSrc, place, template, button, diceValue, name);
    this.needImg = needImg;
    this.gameAlert = gameAlert;
    this.renderD30 = renderD30;
  }
  _rollDice(result, container, button) {
    super._rollDice(result, container, button);
    this.getResult();
    if (this.result === "-") {
      result.classList.add("dice-red");
    }
    if (this.result === "2") {
      setTimeout(() => {
        this.place.firstElementChild.remove();
        this.renderD30();
        this.needImg.classList.remove("blocked-dice");
      }, 500);
    }
    this.gameAlert.textContent = "";
  }
  getResult() {
    super.getResult();
  }
}
