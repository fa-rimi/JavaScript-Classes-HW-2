// Part 1
class Governor {
  static rule = "healthcare";
  constructor(name, law, votes) {
    this.name = name;
    this.law = law;
    this.votes = votes;
  }
}

const chucky = new Governor("Chucky", "healthcare", "100");
console.log(chucky);
console.log(chucky.name);
console.log(chucky.law);
console.log(chucky.votes);

// Part 2
class Person {
  constructor(name, job, mood) {
    this.name = name;
    this.job = job;
    this.mood = mood;
  }
  greet() {
    console.log(`My name is ${this.name}. It's nice to meet you.`);
  }
  work() {
    console.log(`I work as a ${this.job}`);
  }
  happy() {
    if (mood === true) {
      console.log(`I love being a ${this.job}`);
    } else {
      console.log("I want to go home");
    }
  }
}


class PostalWorker extends Person {
  constructor(name, job, mood) {
    super(name, job, mood);
  }
  // action
  delivery() {
    console.log(`Heres your package ${this.name}`);
  }
  package() {
    console.log(`Where did the package go?`);
  }
  moody() {
    console.log(`I am ${this.mood}`);
  }
}

const p1 = new PostalWorker("Colton", "Driver", "tired");
const p2 = new PostalWorker("Abraham", "Runner", "i feel nothing");

// console.log(p1);
p1.delivery();
p1.package();
p1.moody();

// console.log(p2);
p2.delivery();
p2.package();
p2.moody();

class Chef extends Person {
  constructor(name, job, mood) {
    super(name, job, mood);
  }
  cook() {
    console.log(`${this.name} made the seasonal menu!`);
  }
  saZon() {
    console.log("This tastes bland");
  }
  status() {
    console.log(`${this.mood}`);
  }
}

const c1 = new Chef("Remy", "Lead Chef", "hungry");
const c2 = new Chef("Emile", "Taste Tester", "full");

// console.log(c1);
c1.cook();
c1.saZon();
c1.status();

// console.log(c2);
c2.cook();
c2.saZon();
c2.status()

// Part 3 