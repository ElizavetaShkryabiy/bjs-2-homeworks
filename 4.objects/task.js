"use strict"
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;     
}
Student.prototype.setSubject = function (subject) {
 this.subject = subject;
}
Student.prototype.addMark = function (mark) { 
  if(this.marks === undefined){ 
    this.marks = [mark];  
    } else {
      let marksArr = [];
      marksArr = this.marks;
      marksArr.push(mark); 
    }
}
Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){ 
    this.marks = [...mark];
    } else {
      this.marks.push(...mark);
    }
}
Student.prototype.getAverage = function () {
  let sum = 0;
  for (let element of this.marks){
   sum = sum + element   
  }
  return sum/this.marks.length;     
 }

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}


