// Object Literals

// let myDetails = {
//   userName: "ashish",
//   userId: 741258,
//   adderss: "ashu@somthing.com",
//   phone: 96325814140,
//   getMyDetails: function () {
//     console.log(`${this.userName}`);
//   },
// };
// console.log(`${myDetails.userId}`);
// console.log(myDetails);
// console.log(myDetails.getMyDetails());
// console.log(this);

// Constructor Function
// 1. New creates empty object called instance.
//2. constructor func called
//3.this keywords the arguments
//4. return the output
function user(userName, loginCount, isLoggedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greating = function () {
    console.log(`Welcome: ${this.userName}`);
  };

  return this;
}

let userOne = new user("Anuradha", 12, true);
let userTwo = new user("Priyanka", 14, false);

console.log(userOne);
console.log(userTwo);
