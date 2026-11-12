function Student(nmae, clas, age) {
  this.name = nmae;
  this.age = age;
  this.clas = clas;
}

let student1 = new Student("ali", 21, 12);
console.log(student1);
let student2 = new Student("afak", 2, 12);
console.log(student2);

console.log(student2);

Student.prototype.nameCall = function () {
  console.log(`hello student ${this.name}`);
};
student2.nameCall();
Student.prototype.corse = "css";
// student1.corse = "js";

console.log(student1.corse);
let ch75 = "nameCall" in student1;
console.log(ch75);
var listOfProperties = [];

for (let prop in student1) {
  listOfProperties.push(prop);
}

console.log(listOfProperties);
console.log(student1.hasOwnProperty("corse"));
