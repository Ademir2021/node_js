class Person {
    constructor(first, last, age, gender, interests) {
        this.first = first;
        this.last = last;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
}
  let person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"])
//   person1.first = "Maria"
//   console.log(person1.valueOf())
console.log(person1.constructor)