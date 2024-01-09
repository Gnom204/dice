import Dice from "./dice.js";

export class DiceD30 extends Dice {
  constructor(
    diceSrc,
    place,
    template,
    button,
    diceValue,
    name,
    gameAlert,
    needImg,
    diceRender
  ) {
    super(diceSrc, place, template, button, diceValue, name);
    this.gameAlert = gameAlert;
    this.needImg = needImg;
    this.isRoll;
    this.diceRender = diceRender;
  }
  _rollDice(result, container, button) {
    if (this.needImg.classList.contains("blocked-dice")) {
      this.place.firstElementChild.remove();
      this.diceRender();
      this.gameAlert.textContent = "";
    } else {
      this.getResult();
      super._rollDice(result, container, button);
      this.needImg.classList.add("blocked-dice");
    }
  }
  getResult() {
    super.getResult();
    let res;
    console.log(res);

    setTimeout(() => {
      console.log(res);
      this.gameAlert.textContent = this._getDescription();
    }, 500);
  }
  _getDescription() {
    let res;
    switch (this.result) {
      case "1":
        res = "оглушение";
        break;
      case "3":
        res = "оглушение (2)";
        break;
      case "5":
        res = "назад дороги нет (5)";
        break;
      case "7":
        res = "одноногий странник (5)";
        break;
      case "9":
        res = "марионетка";
        break;
      case "11":
        res = "точка возврата";
        break;
      case "13":
        res = "занесённый странник";
        break;
      case "15":
        res = "внезапное нападение";
        break;
      case "17":
        res = "один к одному";
        break;
      case "19":
        res = "один к одному (3)";
        break;
      case "21":
        res = "безвоздушная атака";
        break;
      case "23":
        res = "принуждённое отступление";
        break;
      case "25":
        res = "принуждённое отступление (2)";
        break;
      case "27":
        res = "принуждённое отступление (4)";
        break;
      case "29":
        res = "жизнь или смерть";
        break;
      case "2":
        res = "режим скорости";
        break;
      case "4":
        res = "диаго-шаг";
        break;
      case "6":
        res = "гиг-шаг";
        break;
      case "8":
        res = "иммунитет свыше";
        break;
      case "10":
        res = "целевой переброс";
        break;
      case "12":
        res = "курс лечения";
        break;
      case "14":
        res = "в прошлое";
        break;
      case "16":
        res = "двойные действия";
        break;
      case "18":
        res = "вынужденный привал";
        break;
      case "20":
        res = "вынужденный привал (2)";
        break;
      case "22":
        res = "четыре икса";
        break;
      case "24":
        res = "безопасная дорога";
        break;
      case "26":
        res = "дай пять";
        break;
      case "28":
        res = "дай пять (2)";
        break;
      case "30":
        res = "реабилитация";
        break;
    }
    console.log({ res });
    return res;
  }
}
