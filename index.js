import { DiceD30 } from "./scripts/diced30.js";
import { DiceD5 } from "./scripts/diced5.js";
import { DiceD6 } from "./scripts/diced6.js";
import { TestAddres } from "./scripts/testAddres.js";
import { TestAnimal } from "./scripts/testAnimal.js";

const diceD6Url = "./source/dice6xBlack.png";
const diceD30Url = "./source/d30withoutGrane.png";
const diceD5Url = "./source/diced5.png";

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

const fillArr = (num) => {
  let arr = [];
  let x = 1;
  while (x < num) {
    arr.push(x.toString());
    x++;
  }
  console.log(arr);
  return arr;
};

let diceD5Arr = fillArr(101);

let diceCount = [
  {
    src: "./source/dice6xBlack.png",
    name: "D6",
  },
  {
    src: "./source/d30withoutGrane.png",
    name: "D30",
  },
  {
    src: "./source/diced5.png",
    name: "D5",
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
  } else if (id === "D6") {
    place.firstElementChild.remove();
    diceD6.renderDice();
  } else if (id === "D30") {
    place.firstElementChild.remove();
    diceD30.renderDice();
  } else if (id === "D5") {
    place.firstElementChild.remove();
    diceD5.renderDice();
  }
}

choiseDice();

const diceD6 = new DiceD6(diceD6Url, place, template, button, diceD6Arr, "D6");
const diceD30 = new DiceD30(
  diceD30Url,
  place,
  template,
  button,
  diceD30Arr,
  "D30"
);
const diceD5 = new DiceD5(diceD5Url, place, template, button, diceD5Arr, "D5");
diceD6.renderDice();

const testAddres = new TestAddres("Андрей", 675, "Ясная улица 8");
console.log({ addres: testAddres.getAddres(), name: testAddres.getName() });

const testAnimal = new TestAnimal("Саня", 230, "Шолохова улица 12");
console.log({ animal: testAnimal.getAnimal(), name: testAnimal.getName() });
testAnimal.getName();
