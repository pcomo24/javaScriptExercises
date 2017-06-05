function Person(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
};

Person.prototype.greet = function(other) {
  console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

var sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
var jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');
sonny.greet(jordan);
jordan.greet(sonny);
console.log(sonny.email, sonny.phone);
console.log(jordan.email, jordan.phone);

//BlackJack Constructors
function Card(point, suit) {
  this.point = point;
  this.suit = suit;
};
Card.prototype.getImageUrl = function() {
    return 'images/' + this.point + '_of_' + this.suit + '.svg'
};

var myCard = new Card(5, 'diamonds');

function Hand() {
  this.cards = [];
};

Hand.prototype.addCard = function(card) {
  this.cards.push(card);
};
Hand.prototype.getPoints = function() {
  var handPoints = 0;
  for (i = 0; i < this.cards.length; i++) {
    handPoints += this.cards[i].point;
  };
  return handPoints;
};

function Deck() {
  this.dZeck = [];
};

Deck.prototype.draw = function () {
  return this.dZeck.card[0];
  this.dZeck.shift();
};
Deck.prototype.shuffle = function (this.Dzeck) {
  //pizzapanther shuffle.js
  for (var i = this.Dzeck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.Dzeck[i];
        this.Dzeck[i] = this.Dzeck[j];
        this.Dzeck[j] = temp;
    };
    return array;
};

//Object Exercises 2
//Inheritance
var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black',
  showInfo: function() {
    console.log('First Name: ' + this.firstName, ' Last Name: ' + this.lastName
      + ' Eye Color: ' + this.eyeColor + ' Hair Color: ' + this.hairColor);
  };
};

var daughter = {firstName: 'Alicia', hairColor: 'brown'};

daughter.__proto__ = mom;
mom.showInfo();
daughter.showInfo();

//Person to Class
class Person {
  constructor(name) {
    this.name = name;
    this.friends = [];
    }
  addFriend(friend) {
    this.friends.push(friend);
  };
  createGreeting(other) {
    return 'Yo ' + other.name + '! from ' + this.name + '.';
  };
  greet(other) {
    console.log(this.createGreeting(other));
  };
  lazyGreet(other) {
    setTimeout( ()=> {
      this.greet(other);
    }
    , 2000);
  }
  createGreetingsForFriends() {
    var greetFriends = this.friends.map( (other) => {return this.createGreeting(other)});
    return greetFriends;
  }

};
var man = new Person('man');
var chick = new Person('chick');
var otherman = new Person('bro');
man.addFriend(otherman);
man.addFriend(chick);
man.friends;
man.greet(chick);

//closures
//counter1
function counter () {
  var count = 0;
  var actuallyCount = function () {
    count++;
    return count;
  }
  return actuallyCount;
}
//counter2
function counter (startCount) {
  var count = startCount;
  var actuallyCount = function () {
    count++;
    return count;
  }
  return actuallyCount;
}
//counter3
class Counter {
  constructor(startCount) {
    this.count = startCount;
  }
  increment() {
    this.count++;
    return this.count;
  }
  decrement() {
    this.count--;
    return this.count;
  }
}
var count1 = new Counter(2);
count1.increment();
count1.decrement();
