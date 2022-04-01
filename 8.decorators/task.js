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
  let flag = false;  
  let timeout;
  function wrapper(...rest){    
    clearTimeout(timeout);
    if (flag === false){
      func.apply(this, rest);
      flag = true;
    }else{    
      timeout = setTimeout(() => {
        func.apply(this, rest);
        flag = false;      
      }, ms)
    }
  }
  return wrapper;
}

function debounceDecorator2(func, ms) {
  let timeout;
  let flag = false;
  function wrapper(...rest){          
    clearTimeout(timeout);
    if (flag === false){
      func.apply(this, rest);
      flag = true;
    }else{  
      timeout = setTimeout(() => {
        func.apply(this, rest);
        flag = false;  
        console.log(`Декоратор вызван ${wrapper.count.length} раз`)      
      }, ms)
    }
    wrapper.count.push(rest);    
  }
  wrapper.count = [];  
  return wrapper;
}
