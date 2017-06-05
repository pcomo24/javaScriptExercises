var a =[10, 2, 3, 9, 7, 6, 8, 1, 5, 4];

function bubbleSort(data) {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < data.length; i++){
      if (data[i] > data[i +1]) {
        var temp = data[i];
        data[i] = data[i +1];
        data[i +1] = temp;
        swapped = true;
      }
    }
    console.log(data);
  }while(swapped);
}


console.log(a);
bubbleSort(a);
console.log(a);


//interview exercise
function triangle (size) {
  for (var i = 0; i < size; i++) {
    console.log(" ".repeat(i) + "*".repeat(size - i))
  };
};
triangle(8)
//insertion
for (i-0l u<lengl i++){
  value = items[i];
  for(j=i-1; j < [i]; J++) {

  }
  ]
}

//fibonacci
function fibonacci(num) {
  var a = 1, b = 0, temp;

  while (num >=0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
    console.log(b);
  }
}

var f = 10;
console.log("fib" + f + " = fibonacci(f)");


//factorial

function factorialize(num) {
  var numCal;
  if (num === 0 || num === 1) {
    numCal = 1;
  for (var i = num - 1; i >= 0; i--) {
    numCal *= i;
    console.log(num);
  }
  return num;
}
  console.log(num + "!" "= " + numCal);
}

factorialize(5);
