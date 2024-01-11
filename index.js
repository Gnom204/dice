import { DiceD30 } from "./scripts/diced30.js";
import { DiceD5 } from "./scripts/diced5.js";
import { DiceD6 } from "./scripts/diced6.js";
import { TestAddres } from "./scripts/testAddres.js";
import { TestAnimal } from "./scripts/testAnimal.js";

const mechanicsTemplate = document.querySelector("#mechanics");

const healContainer = document.querySelector("#heal-con");
const healText = document.querySelector(".heal-text");

const diceD6Url = "./source/dice6xBlack.png";
const diceD30Url = "./source/d30withoutGrane.png";
const diceD5Url = "./source/diced5.png";

const template = document.querySelector("#template");
const choiceTemplate = document.querySelector("#dice-choice");

const gameAlert = document.querySelector(".game-alert");

const place = document.querySelector(".dices");
const button = document.querySelector("#butn");
const choisePlace = document.querySelector(".choose-dice");

let diceD6Arr = ["1", "2", "3", "4", "5", "-"];
let diceD5Arr = [
  "1",
  "5",
  "10",
  "15",
  "20",
  "25",
  "30",
  "35",
  "40",
  "45",
  "50",
  "55",
  "60",
  "65",
  "70",
  "75",
  "80",
  "85",
  "90",
  "95",
  "101",
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

let diceD30Arr = fillArr(30);

let diceCount = [
  {
    src: "./source/diced5.png",
    name: "D5",
  },
  {
    src: "./source/dice6xBlack.png",
    name: "D6",
  },
  {
    src: "./source/d30withoutGrane.png",
    name: "D30",
  },
];
let needImg;
function createChoice(src, name) {
  const cloneChoice = choiceTemplate.content.cloneNode(true);

  const img = cloneChoice.querySelector(".choice-img");
  const text = cloneChoice.querySelector(".choice-name");
  img.id = name;
  img.src = src;
  if (img.id === "D30") {
    needImg = img;
    img.classList.add("blocked-dice");
  }
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
  } else if (id === "D6" && place.firstElementChild.id != "D5") {
    place.firstElementChild.remove();
    gameAlert.textContent = "";
    diceD6.renderDice();
  } else if (id === "D6" && place.firstElementChild.id === "D5") {
    gameAlert.textContent = "";
    place.firstElementChild.remove();
    place.firstElementChild.remove();
    healContainer.classList.add("heal-invis");
    healText.textContent = "Введите ваше текущее здоровье";
    diceD6.renderDice();
  } else if (
    id === "D30" &&
    !needImg.classList.contains("blocked-dice") &&
    place.firstElementChild.id != "D5"
  ) {
    place.firstElementChild.remove();
    diceD30.renderDice();
  } else if (
    id === "D30" &&
    place.firstElementChild.id === "D5" &&
    !needImg.classList.contains("blocked-dice")
  ) {
    healContainer.classList.add("heal-invis");
    healText.textContent = "Введите ваше текущее здоровье";
    place.firstElementChild.remove();
    place.firstElementChild.remove();
    diceD30.renderDice();
  } else if (id === "D5" && place.firstElementChild.id != "D5") {
    console.log(place.firstElementChild);
    gameAlert.textContent = "";
    place.firstElementChild.remove();
    diceD5.renderDice();
  }
}

function heal() {
  const healInput = healContainer.querySelector("#heal-input");
  const healBtn = healContainer.querySelector(".heal-btn");
  let hp;
  healInput.addEventListener("input", () => {
    hp = parseInt(healInput.value) + (parseInt(healInput.value) / 100) * 40;
  });
  healBtn.addEventListener("click", () => {
    healInput.value = "";
    healText.textContent = `Ваше здоровье восполнено до ${hp}`;
  });
}

heal();

choiseDice();

const diceD6 = new DiceD6(
  diceD6Url,
  place,
  template,
  diceD6Arr,
  "D6",
  needImg,
  gameAlert,
  () => diceD30.renderDice()
);
const diceD30 = new DiceD30(
  diceD30Url,
  place,
  template,
  diceD30Arr,
  "D30",
  gameAlert,
  needImg,
  () => diceD6.renderDice()
);
const diceD5 = new DiceD5(
  diceD5Url,
  place,
  template,
  diceD5Arr,
  "D5",
  mechanicsTemplate,
  healContainer
);
diceD6.renderDice();
