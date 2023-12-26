class Dice {
  constructor(diceSrc, place, template, button, diceValue, name) {
    this.template = template;
    this.diceSrc = diceSrc;
    this.diceValue = diceValue;
    this.button = button;
    this.place = place;
    this.name = name;
    this.dice;

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
    result.style = "font-size:56px; color:white";
    button.disabled = true;

    setTimeout(() => {
      container.classList.remove("dice-active");

      let randomNum = this._getRandomNum(1, this.diceValue.length + 1);
      if (this.diceValue[randomNum - 1] === "-") {
        result.style = "font-size:72px; color:red";
      }
      result.textContent = this.diceValue[randomNum - 1];
      button.disabled = false;
    }, 500);
  }
  _getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

export default Dice;
