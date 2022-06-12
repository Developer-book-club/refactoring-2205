class Person {
 constructor() {
  this._course = 0;
 }
 get courses() {
  return this._course;
 }

 set courses(number) {
  this._course = number;
 }
}
const p = new Person();

p.courses = 12;

console.log(p.courses);
