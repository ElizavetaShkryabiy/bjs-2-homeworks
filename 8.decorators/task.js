function cachingDecoratorNew(func) {
  const cache = [];
  return function(...rest){
    let key = rest.toString()    
    let idx = cache.findIndex((item)=> item[key] !== undefined); 
    if (idx !== -1 ) {
      let show = cache[idx];
      
      console.log("Из кэша: " + show[key]);
     return "Из кэша: " + show[key];
    }else{
     let result = func(...rest); 
     cache.push({[key] : result})
     if (cache.length > 5){
       cache.shift();       
     }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
}

function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
