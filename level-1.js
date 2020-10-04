// question 1

var firstVarible = "stringVariable";

// question 2

var person = {
  name: "Ingrid",
  age: 12,
};

// question 3

var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

// question 4

var numberArray = [5, 17, 101, 54, 1];

for (var i = 0; i < numberArray.length; i++) {
  console.log(numberArray[i]);
}

// question 5

for (var i = 15; i <= 25; i++) {
  console.log(i);
}

// question 6

for (var i = 15; i <= 25; i++) {
  if (i === 20) {
    console.log(i);
  }
}

// question 7

var shirts = [
  {
    color: "yellow",
    size: 34,
    inStock: true,
  },
  {
    color: "green",
    size: 38,
    inStock: false,
  },
];

for (var i = 0; i < shirts.length; i++) {
  console.log(shirts[i].size);
  console.log(shirts[i].inStock);
}

// question 8

function whatIDontLike(dontLike) {
  console.log("I don't like " + dontLike);
}

whatIDontLike("spiders");

// question 9

function moneyLeft(income, expenditure) {
  var sum = income - expenditure;
  console.log(sum);
}

moneyLeft(18000, 14890);

// question 10

var myArray = [];

function pushToArray(newObject) {
  myArray.push(newObject);
}

pushToArray("firstObject");
