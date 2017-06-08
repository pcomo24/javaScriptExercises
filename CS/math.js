//multiply
function multiply (x, y) {
  var plicand = x;
  var plier = y;
  for (var i = 1; i < plier; i++) {
    plicand += x;
  }
//  if (y < 0) {
//    plicand *= -1;
//  }
//  console.log(plicand);
};

multiply(4, 5);

//exponents
function power (x, y) {
  var num = 0;
  if (y == 0) {
    num = 1;
  }

  var xponent = y;
  for (var i = 0; i < xponent; i++) {
    num *= x;
  }
  console.log(num);
};

power(2,3);

//find the duplicate number in array
var arr1 = [10, 1, 3, 4, 8, 5, 7, 6, 9, 5, 2, 9, 9];
var arr2 = [];
var dup = [];
function checkXtra() {
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      dup.push(arr1[i]);
    } else {
      arr2.push(arr1[i]);
    };
  };
};

checkXtra();
