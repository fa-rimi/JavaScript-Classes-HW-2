class Governor {
  static rule = "healthcare";
  constructor(name, law, votes) {
    this.name = name;
    this.law = law;
    this.votes = votes;
  }
}

const chucky = new Governor('Chucky', 'healthcare', '100');
console.log(chucky);
console.log(chucky.name);
console.log(chucky.law);
console.log(chucky.votes);
