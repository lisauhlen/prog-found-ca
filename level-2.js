// question 1

for (var i = 15; i <= 25; i++) {
  if (i % 2 < 1) {
    console.log(i);
  }
}

// question 2

function firstFunction() {
  console.log("I am a function");
}

var innerFunction = firstFunction;

function outerFunction(outerArgument) {
  outerArgument();
}

outerFunction(innerFunction);
