Object.prototype

function Person(first, last, age, gender, interests){
    this.first = first;
    this.last = last;
    this.age = age;
    this.interests = interests;
}

var person1 = new Person("Ademir","Souza", 48, "M", ["ler", "pescar"])
console.log(person1)

var person2 = Object.create(person1);
//console.log(person2.__proto__)


//person1.valueOf()
console.log(Person.prototype.interests=["futebol", 'Natação'])
console.log(Object.prototype)

var person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
person3.first
//person3.age
//person3.bio()

//console.log(person2.age)