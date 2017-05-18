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
  
}
