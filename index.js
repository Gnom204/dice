import Dice from "./scripts/dice.js";
const diceSixUrl = "./source/dice6xblack.png";
const diceThirtyUrl = "./source/dice30xBlackFull.png";
const template = document.querySelector("#template");
const choiceTemplate = document.querySelector("#dice-choice");
const place = document.querySelector(".dices");
const button = document.querySelector(".butn");
const choisePlace = document.querySelector(".choose-dice");
let styleDice = "";
let diceSixArr = ["1", "2", "3", "4", "5", "-"];
let diceThirtyArr = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
];
let diceCount = [
  {
    src: "./source/dice6xblack.png",
    name: "D6",
  },
  {
    src: "./source/dice30xBlackFull.png",
    name: "D30",
  },
];

function createChoice(src, name) {
  const cloneChoice = choiceTemplate.content.cloneNode(true);

  const img = cloneChoice.querySelector(".choice-img");
  const text = cloneChoice.querySelector(".choice-name");

  img.src = src;
  text.textContent = name;
  return cloneChoice;
}

function choiseDice() {
  diceCount.forEach((dice) => {
    const choise = createChoice(dice.src, dice.name);
    choisePlace.appendChild(choise);
  });
}

choiseDice();

const diceD6 = new Dice(diceSixUrl, place, template, button, diceSixArr);
const diceD30 = new Dice(diceThirtyUrl, place, template, button, diceThirtyArr);
// diceD6.renderDice();
diceD30.renderDice();
