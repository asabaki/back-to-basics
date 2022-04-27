function Person(name) {
  console.dir(this);
  this.name = name;
}

Person.prototype.greet = function (otherName) {
  console.log(`Hi, ${otherName}! I'm ${this.name}`);
};

const asi = new Person("Asi");

asi.greet("Baka");

/* 

console.dir(asi);
console.dir(asi.__proto__, { showHidden: true, depth: 0 });
console.dir(asi.__proto__.__proto__, { showHidden: true, depth: 0 });
console.dir(asi.__proto__.__proto__.__proto__);

/*

asi.constructor("bar");
console.log(asi);

const baka1 = asi.constructor.call({}, "Baka");
console.log(baka1);

const baka2 = Person("Baka");
console.log(baka2);
console.log(name);

*/
