let myName = "Ashish     ";

String.prototype.actualLength = function () {
  console.log(`${myName.trim().length}`);
};
// console.log(myName.length);

// myName.prototype.actualLength = function () {
//   console.log(`actual lenght: ${this.myName}`);
// };

let myHeros = ["ironman", "syuperman"];

let heroPower = {
  ironman: "arc reacter",
  superman: "sun",
  getNewPower: function () {
    console.log(`ironman got nenotech`);
  },
};

/* 1. Creating methods ashish() 
   2. Object.prototype used to create prototype in string, array, function*/

Object.prototype.ashish = function () {
  console.log(`Ashish got all the powers`);
};

Array.prototype.ashu = function () {
  console.log(`Ashu says hello`);
};
// heroPower.ashish();
// myHeros.ashish();
// myHeros.ashu();
myName.actualLength();

// Inheritance in JavaScript

let cricket = {
  palyers: 11,
};

let msd = {
  position: "wicketkepper",
};

let jBoomrah = {
  type: "Pacer",
  __proto__: msd,
};

Object.setPrototypeOf(cricket, jBoomrah);
console.log(cricket);
console.log(cricket.type); // type: pacer from Jboomrah
console.log(cricket.position); // type: wicketkepper from msd
console.log(Object.getPrototypeOf(cricket)); // Jboomrah
console.log(Object.getPrototypeOf(Object.getPrototypeOf(cricket))); // msd
