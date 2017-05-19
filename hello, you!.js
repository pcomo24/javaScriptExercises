//hello you
function hello(name) {
  console.log("Hello ", name)
}

hello('Mustache');
//hello, you! part 2
function hello(name) {
  console.log("Hello ", name)
  if (name == undefined) {
    console.log("Hello World")
  }
}
hello()
//Madlib
function madlib(name, subject) {
  return(`${name}'s favorite subject is ${subject}`)
}

madlib('paul', 'PE')
//Tip Calculator
function tipAmount(bill, service) {
  if (service == 'good') {
    return bill * .2
  } else if (service == 'fair') {
    return bill * .15
  } else if (service == 'bad') {
    return bill * .10
  } else {
    return none
    console.log('invalid service entry')
  }
}
tipAmount(40, 'good')
tipAmount(40, 'fair')
tipAmount(40, 'bad')

//Tip Calculator 2
function totalAmount(bill, service) {
  if (service == 'good') {
    return bill * .2 + bill
  } else if (service == 'fair') {
    return bill * .15 + bill
  } else if (service == 'bad') {
    return bill * .10 + bill
  } else {
    return none
    console.log('invalid service entry')
  }
}

//Tip Calculator 3
function splitAmount(bill, service, people) {
  if (service == 'good') {
    return ((bill * .2) + bill) / people
  } else if (service == 'fair') {
    return ((bill * .15) + bill) / people
  } else if (service == 'bad') {
    return ((bill * .10) + bill) / people
  } else {
    return none
    console.log('invalid service entry')
  }
}
//Print Numbers WHILE
function printNumbers(start, end) {
  let count = start
  while (count < end) {
    console.log(count)
    count += 1;
  }
  console.log(count)
}
printNumbers(4, 14);
//Print Numbers FOR
function printNumbers(start, end) {
  for (var i=start; i < end; i++) {
    console.log(i);
  }
  console.log(i)
}
printNumbers(4, 14)
//Print as Square
function printSquare(size) {
  let i = 0
  while (i < size) {
    console.log("*".repeat(size))
    i += 1;
  }
}
printSquare(3);
//print a box
function printBox(width, height) {
  console.log("*".repeat(width))
  var i = 0;
  while (i < height - 2) {
    console.log("*" + (" ".repeat(width-2) + "*"))
    i +=1;
  }
  console.log("*".repeat(width))
}
printBox(5, 7)
//print a banner
function printBanner(banner) {
  var textL = banner.length;
  console.log("*" + "*".repeat(textL) + "*")
  console.log("*" + banner + "*")
  console.log("*" + "*".repeat(textL) + "*")
}
printBanner('Welcome to DigitalCrafts');
//factor a number
function factors(theNum) {
  var theFactors = []
  for (var i = 0; i < theNum; i++) {
    if (theNum % i == 0) {
      theFactors.push(i);
    }
  }
  console.log(theFactors)
}
factors(24);
//Caesar Cipher
function cipher(codes, offset) {
  var alphabet = []
  var coded = ''
  for (i = 65; i < 90; i++) {
    alphabet.push(String.fromCharCode(i))
  }
//caesar cipher 2
//LeetSpeak
function leetspeak(str) {
  var newString = ''
  for (var i = 0; i < str.length; i++) {
    if (str.charAt([i]) == 'A') {
      newString += 4;
    } else if (str.charAt([i]) == 'E') {
      newString+= 3;
    } else if (str.charAt([i]) == 'G') {
      newString+= 6;
    } else if (str.charAt([i]) == 'I') {
      newString+= 1;
    } else if (str.charAt([i]) == 'O') {
      newString+= 0;
    } else if (str.charAt([i]) == 'S') {
      newString+= 5;
    } else if (str.charAt([i]) == 'T') {
      newString+= 7;
    } else {
      newString += str.charAt([i]);
    }
  }
  console.log(newString)
}
//long-long Vowels
function vowels(str) {
  var newString = ''
  for (var i = 0; i < str.length; i++) {
    if (str.charAt([i]) == 'o') {
      newString += 'o'.repeat(5);
    } else if (str.charAt([i]) == 'e') {
      newString += 'e'.repeat(5);
    } else {
      newString += str.charAt([i]);
    }
  } console.log(newString)
}
//sum the Numbers
function sumNumber(theArray) {
  var a = 0;
  for (var i = 0; i < theArray.length; i++) {
    a += theArray[i]
  }
  console.log(a)
}
sumNumber([4, 5, 2])
//Just the positives
function positiveNumbers(theArray) {
  var positives = [];
  for (var i = 0; i < theArray.length; i++) {
    if (theArray[i] > 0) {
      positives.push(theArray[i]);
    }
  } console.log(positives);
}
positiveNumbers([4,-3,5,-2,0,1])
//Matrix Addition
function matrixAdd(max1, max2) {
  maxSum = [[],[]];
  maxSum[0][0] = (max1[0][0] + max2[0][0]);
  maxSum[0][1] = (max1[0][1] + max2[0][1]);
  maxSum[1][0] = (max1[1][0] + max2[1][0]);
  maxSum[1][1] = (max1[1][1] + max2[1][1]);
  console.log(maxSum);
}

matrixAdd([[1,3],[2,4]],[[5,2],[1,0]])
//Matrix Multiplication
//Rock Paper Scissors
function rockPaperScissors(throw1, throw2) {
  if ((throw1 == 'rock' && throw2 == 'scissors') || (throw1 == 'scissors' && throw2
    == 'paper') || (throw1 == 'paper' && throw2 == 'rock')) {
    console.log('player1 wins!')
  } else if (throw1 == throw2) {
    console.log('draw!')
  } else {
    console.log('player2 wins!')
  }
}
//Tic Tac Toe
function ticTacToe(max) {
  var o = 'O'
  var x = 'X'
  if ((max[0][0] == o && max[0][1] == o && max[0][2] == o) || (max[0][0]
    == o && max[1][0] == o && max[2][0] == o) || (max[0][0] == o &&
    max[1][1] == o && max[2][2] == o) || (max[0][2] == o && max[1][1] == o &&
    max[2][0] == o)) {
      console.log(o)
  } else if
    ((max[0][0] == x && max[0][1] == x && max[0][2] == x) || (max[0][0]
      == x && max[1][0] == x && max[2][0] == x) || (max[0][0] == x &&
      max[1][1] == x && max[2][2] == x) || (max[0][2] == x && max[1][1] == x &&
      max[2][0] == x)) {
        console.log(x)
  } else {
    console.log('null')
  }
}
