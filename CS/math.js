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
