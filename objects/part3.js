class Person {
  constructor(name) {
    this.name = name;
  }

  greet(otherName) {
    console.log(`Hi, ${otherName}! I'm ${this.name}`);
  }
}

const asi = new Person("Asi");

asi.greet("Baka");

/* 

console.dir(asi);
console.dir(asi.__proto__, { showHidden: true, depth: 0 });
console.dir(asi.__proto__.__proto__, { showHidden: true, depth: 0 });
console.dir(asi.__proto__.__proto__.__proto__);

//asi.constructor("bar");
//asi.constructor.call({}, "baz");
//Person("foo");

*/
