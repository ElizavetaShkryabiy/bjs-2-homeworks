"use strict"
class PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
    }
    set state(number){
        if (number < 0){
            this._state = 0;
        }
        if (number > 100){
            this._state = 100;
        }else{
        this._state = number;
        }
    }
    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";        
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";        
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";       
    }
}

class Library {
    constructor (name){
        this.name = name;
        this.books = [];
    }
    addBook(book){    
        let checkValue = book._state;
        if (checkValue > 30){
            let library = [];
            library = this.books;
            library.push(book);
        }else{
            console.log("Книга в плохом состоянии")
        }
    }
    findBookBy(key, value){
        let result = undefined;
        let keyValue = null;
        for (let book of this.books){           
            let prop = Object.keys(book);
            keyValue = prop.find((type) => type === key);
            for(keyValue in book){
               if(book[key] === value){
                result = book;
               }else{
                result = null;
               }
            }          
        }
        
        return result;  
    }
    giveBookByName(bookName){
        let result = this.books.find((book) => book.name === bookName);
        let resultIndex = this.books.findIndex((book) => book.name === bookName);
        if (result !== undefined) {            
            this.books.splice(resultIndex,1)
            return result;
        }else{
            return null;
        }
    }
}

// // Task3

// class Student {
//     constructor(name){
//         this.name = name;
//         this.subject = [];       
//     }
//     addMark(mark,subject){
//         if (this.subject === undefined){
//             Student[subject] = [];
//             this.marks = [mark];
//         }else{        
//         this.subject = subject;
//         if(this.marks === undefined){ 
//             this.marks = [mark];  
//             } else {
//               this.marks.push(mark); 
//             }
//         }
        
//     }
//     getAverageBySubject (subject){
//         let sum = 0;
//         for (let element of this.subject){
//         sum = sum + element   
//         }
//         return sum/this.marks.length;
//     }
//     getAverage(){

//     }
//     exclude(reason){
//         delete this.subject;
//         delete this.marks;
//         this.excluded = reason;
//     }  
// }




