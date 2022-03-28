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
        this.books. 
       let result = null;
       let arr = []; 
       let type = key;     
       for (let key of Object.entries(this.books)){
           if (key === type){

           }
           for ()
            

       }
        in this.books){
           let typ = this.books.find(type);
           let val = this.books[typ];
           result = (typ === key)&&(val === value);
       }       
       if (result !== undefined){
           return result;
       }else{
           return null;
       }
    }
    giveBookByName(bookName){
        let result = this.books.findIndex(bookName);
        if (result !== undefined) {
            this.books.splice(result,1)
            return this.books;
        }else{
            return null;
        }
    }
}