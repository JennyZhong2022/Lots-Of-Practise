

// Create a Nologist class
// you decide what properties to give it, but it has to have a title property (“Student”, “Consultant”)
// 3 methods:
// read the title property
// change the title property
// method to say hi()
// Create a class that extends Nologist for anyone that’s a past Nologist
// method to say hi() in Polish


const student = {
  name: 'Jenny',
}

const consultant = {
  position:'web developer'
}

// console.log(consultant.__proto__);

// console.log(consultant.type);

class Nologist{
  constructor(student, consultant) {
    this.student = student
    this.consultant=consultant
  }

  getInfo() {
    return `${this.student} is a ${this.consultant}`
  }

  changeInfo(newConsultant) {
    return this.consultant = newConsultant,
    console.log(this.consultant);
  }

  sayHi() {
    console.log('say hi');
  }
}

const nologist = new Nologist('jenny', 'web developer')
console.log(nologist);
console.log(nologist.getInfo());
nologist.changeInfo('data engineer')
nologist.sayHi()

class NewNologist extends Nologist{
  constructor(student, consultant, location) {
    super(student, consultant)
    this.location=location
  }

  sayHi() {
    console.log('say Hiiiii');
  }
}

const anotherNologist = new NewNologist('Kat', 'software engineer', 'melbourne')
console.log(anotherNologist);
anotherNologist.sayHi()
console.log(anotherNologist.getInfo());




