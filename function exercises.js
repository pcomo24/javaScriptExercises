// positive numbers
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function isEven (n) {
  return n % 2 == 0;
}
a.filter(isEven);
//square the Numbers
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function squared (n) {
  return Math.pow(n, 2);
}
a.map(squared);
//Cities 1
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
cities.filter(function (item) {
  return item.temperature < 70.0;
});
// Cities 2
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
cities.filter(function (item) {
  return item.name;
});
