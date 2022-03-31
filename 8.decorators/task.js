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

function debounceDecoratorNew(func, ms) {  
  let timeout;
  function wrapper(...rest){    
    clearTimeout(timeout);
    func.apply(this, rest);
    timeout = setTimeout(() => {
      func.apply(this, rest);      
    }, ms)
  }
  return wrapper;
}

function debounceDecorator2(func, ms) {
  let timeout;
  function wrapper(...rest){          
    clearTimeout(timeout);  
    func.apply(this, rest);   
    timeout = setTimeout(() => {
      func.apply(this, rest);
      console.log(`Декоратор вызван ${wrapper.count.length} раз`)      
    }, ms)
    wrapper.count.push(rest);    
  }
  wrapper.count = [];  
  return wrapper;
}
