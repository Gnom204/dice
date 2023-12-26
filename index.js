import Dice from "./scripts/dice.js";
const diceD6Url = "./source/dice6xblack.png";
const diceD30Url = "./source/dice30xBlackFull.png";
const template = document.querySelector("#template");
const choiceTemplate = document.querySelector("#dice-choice");
const place = document.querySelector(".dices");
const button = document.querySelector(".butn");
const choisePlace = document.querySelector(".choose-dice");

let diceD6Arr = ["1", "2", "3", "4", "5", "-"];
let diceD30Arr = [
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
    src: "./source/dice6xBlack.png",
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
  img.id = name;
  img.src = src;
  text.textContent = name;
  img.addEventListener("click", postDice);
  return cloneChoice;
}

function choiseDice() {
  diceCount.forEach((dice) => {
    const choise = createChoice(dice.src, dice.name);
    choisePlace.appendChild(choise);
  });
}

function postDice(e) {
  const { id } = e.target;
  if (id === place.firstElementChild.id) {
    console.log("Выбран тот же кубик");
    return;
  } else if (id === "D6" && place.firstElementChild.id === "D30") {
    place.firstElementChild.remove();
    diceD6.renderDice();
  } else if (id === "D30" && place.firstElementChild.id === "D6") {
    place.firstElementChild.remove();
    diceD30.renderDice();
  }
}

choiseDice();

const diceD6 = new Dice(diceD6Url, place, template, button, diceD6Arr, "D6");
const diceD30 = new Dice(
  diceD30Url,
  place,
  template,
  button,
  diceD30Arr,
  "D30"
);
// diceD6.renderDice();
diceD30.renderDice();
