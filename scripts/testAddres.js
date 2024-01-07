import { Test } from "./test.js";

export class TestAddres extends Test {
  constructor(name, id, addres) {
    super(name, id);
    this.addres = addres;
  }
  getAddres() {
    return this.addres;
  }
  setAddres(addres) {
    this.addres = addres;
  }
}
