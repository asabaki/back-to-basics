function Greeter(name) {
  return function (otherName) {
    console.log(`Hi, ${otherName}! I'm ${name}`);
  };
}

const greetAsAsi = Greeter("Asi");
greetAsAsi("Baka");

console.dir(greetAsAsi);
console.dir(greetAsAsi.__proto__, { showHidden: true, depth: 0 });
console.dir(greetAsAsi.__proto__.__proto__);
console.dir(greetAsAsi.__proto__.__proto__.__proto__);
