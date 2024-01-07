import { Test } from "./test.js";

export class TestAnimal extends Test {
  constructor(name, id, animal) {
    super(name, id);
    this.animal = animal;
  }
  getAnimal() {
    return this.animal;
  }
  setAnimal(animal) {
    this.animal = animal;
  }
}
