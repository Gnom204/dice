import Dice from "./dice.js";

export class DiceD5 extends Dice {
  constructor(
    diceSrc,
    place,
    template,
    button,
    diceValue,
    name,
    mechanicsTemplate,
    healContainer
  ) {
    super(diceSrc, place, template, button, diceValue, name);
    this.mechanicsTemplate = mechanicsTemplate;
    this.mechanicsNode;
    this.resultNode;
    this.result;
    this.atack = 25;
    this.isDef = false;
    this.healContainer = healContainer;
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
      console.log("Атака");
    });
    defense.addEventListener("click", () => {
      this.isDef = true;
      console.log("Защита");
    });
    heal.addEventListener("click", () => {
      console.log(this.place.firstElementChild);
      console.log("Лечение");
      this._healRender();
      this._plusRender();
    });
    this.mechanicsNode = clone;
  }
  _rollDice(result, container, button) {
    super._rollDice(result, container, button);
    if (this.isDef) {
      setTimeout(() => {
        this.resultNode.textContent = parseInt(this.result) / 2;
        this.isDef = false;
      }, 500);
    } else {
      console.log("защиты нет");
    }
  }
  _plusRender() {
    let value = Math.round(Math.random() * 60);
    let x = 0;
    const plusContainer = document.createElement("div");
    plusContainer.classList.add("plus-container");
    while (x < value) {
      let xCor = Math.round(Math.random() * 150);
      let yCor = Math.round(Math.random() * 150);
      const plus = document.createElement("div");
      plus.classList.add("plus");
      plus.style.top = `${yCor}px`;
      plus.style.left = `${xCor}px`;
      plusContainer.insertAdjacentElement("afterbegin", plus);
      this.place.insertAdjacentElement("beforeend", plusContainer);
      x++;
    }
    setTimeout(() => {
      this.place.removeChild(plusContainer);
    }, 1800);
  }
  _healRender() {
    this.healContainer.classList.remove("heal-invis");
  }
}
