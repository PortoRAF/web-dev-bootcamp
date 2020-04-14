const faker = require("faker");
var randomName;
var randomPrice;

console.log("===================");
console.log("WELCOME TO MY SHOP!");
console.log("===================");

for (let index = 0; index < 10; index++) {
  randomName = faker.commerce.productName();
  randomPrice = faker.commerce.price();
  console.log(randomName + " - $" + randomPrice);
}
