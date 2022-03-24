"use strict"
function solveEquation(a, b, c) {
  let root = [];   
  let d = b**2-4*a*c;
    if (d === 0) {
        let rootForZero = -b/(2*a);
        root.push(rootForZero);        
    }
    else if (d>0){
        let rootOne = (-b + Math.sqrt(d) )/(2*a);
        let rootTwo = (-b - Math.sqrt(d) )/(2*a);
        root.push(rootOne);    
        root.push(rootTwo);    
    }
    else {
      return root;
    }
  return root;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
}
if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
}
if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
}
if (isNaN(date)) {
    return `Параметр "Дата" содержит неправильное значение "${date}"`;
}
  let totalAmount;
  let timeInMonths = 0;
  let today = new Date;
  let yearsFromNow = date.getFullYear() - today.getFullYear();
  if (yearsFromNow >= 1){
    timeInMonths = 12 * yearsFromNow;
  } else {
    return timeInMonths;
  }
  let monthsFromNow = date.getMonth() - today.getMonth();
  timeInMonths = timeInMonths + monthsFromNow;
  let percentMonthly = percent/100/12; 
  let amountToReturn = amount - contribution;
  let paymentMonthly = amountToReturn * (percentMonthly + (percentMonthly / (((1 + percentMonthly)**timeInMonths)-1)))
  totalAmount = paymentMonthly * timeInMonths;
  console.log(totalAmount.toFixed(2))

  return Number(totalAmount.toFixed(2));
}
