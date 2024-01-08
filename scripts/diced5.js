import Dice from "./dice.js";

export class DiceD5 extends Dice {
  constructor(
    diceSrc,
    place,
    template,
    button,
    diceValue,
    name,
    mechanicsTemplate
  ) {
    super(diceSrc, place, template, button, diceValue, name);
    this.mechanicsTemplate = mechanicsTemplate;
    this.mechanicsNode;
    this.resultNode;
    this.result;
    this.atack = 10;
  }
  renderDice() {
    super.renderDice();
    this._createMechanics();
    this.place.insertAdjacentElement("afterbegin", this.mechanicsNode);
  }
  _createMechanics() {
    const clone =
      this.mechanicsTemplate.content.firstElementChild.cloneNode(true);
    const atack = clone.querySelector(".attack");
    const defense = clone.querySelector(".defense");
    const heal = clone.querySelector(".heal");
    console.log(clone, atack, defense, heal);
    super.getResult();

    atack.addEventListener("click", () => {
      console.log(parseInt(this.result) + 10);
      this.resultNode.textContent = parseInt(this.result) + this.atack;
      this.atack >= 0 ? (this.atack -= 2) : (this.atack = 10);
      console.log("Атака");
    });
    defense.addEventListener("click", () => {
      console.log("Защита");
    });
    heal.addEventListener("click", () => {
      console.log("Лечение");
    });
    this.mechanicsNode = clone;
  }
}
