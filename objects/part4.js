class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }

  greet(otherName) {
    console.log(`Hi, ${otherName}! I'm ${this.#name}`);
  }
}

const asi = new Person("Asi");
asi.greet("Baka");

console.log(asi);

/*

asi.getName = function () {
  return this.#name;
};

*/
