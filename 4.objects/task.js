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
      marks.addMark(...mark);
    }
}
Student.prototype.getAverage = function () {
  if(this.average === undefined){ 
    this.average = 0;  
    } else {
      this.average = 0; 
    } 
  let marksArr = [];
  let sum = 0;
  marksArr = this.marks; 
  for (let element of marksArr){
   sum = sum + element   
  }
  return this.average = sum/marksArr.length;     
 }

Student.prototype.exclude = function (reason) {
  delete Student.subjectName;
  delete Student.marks;
  this.excluded = reason;
}


