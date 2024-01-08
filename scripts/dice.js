class Dice {
  constructor(diceSrc, place, template, button, diceValue, name) {
    this.template = template;
    this.diceSrc = diceSrc;
    this.diceValue = diceValue;
    this.button = button;
    this.place = place;
    this.name = name;
    this.result;
    this.dice;
    this.isEvent;
    this.resultNode;
    // this.objSymbols = objSymbols;
  }
  _createDice() {
    const clone = this.template.content.cloneNode(true);
    const container = clone.querySelector(".dice-container");
    container.id = this.name;
    const img = clone.querySelector(".dice-img");
    img.src = this.diceSrc;
    img.alt = "Кубик";

    const result = clone.querySelector(".dice-result");
    this.resultNode = result;
    result.textContent = "";
    container.addEventListener("click", () => {
      this._rollDice(result, container, this.button);
    });
    this.button.addEventListener("click", () => {
      this._rollDice(result, container, this.button);
    });

    return clone;
  }
  renderDice() {
    this.dice = this._createDice();
    this.place.appendChild(this.dice);
    console.log({ place: this.place, dice: this.dice });
  }
  _rollDice(result, container, button) {
    container.classList.add("dice-active");
    result.textContent = "";
    button.disabled = true;
    result.classList.remove("dice-red");
    let randomNum = this._getRandomNum(1, this.diceValue.length + 1);
    let resValue = this.diceValue[randomNum - 1];
    this.result = resValue;
    this.getResult();

    setTimeout(() => {
      container.classList.remove("dice-active");
      result.textContent = resValue;
      button.disabled = false;
    }, 500);
  }
  _getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  getResult() {
    console.log(this.result);
    return this.result;
  }
  getDice() {
    return this.dice;
  }
  setResult(res) {
    this.result = res;
  }
}

export default Dice;
