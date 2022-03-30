"use strict"
class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id){
        if (id === undefined){
            throw new Error ("no id");
        }
        if (this.alarmCollection.some((element) => element.id == id) !== false){
            console.error("already exists");                        
        }
        else{
            this.alarmCollection.push({
                id: id,
                time: time,
                callback: callback,})
        }
    }
    removeClock(id){
        let success = this.alarmCollection.find((item) => item.id === id);
        if (success !== false){
            let space = this.alarmCollection.findIndex((item) => item.id === id);
            this.alarmCollection.splice(space, 1)
        }else{
            throw console.error("couldn't find it");  
        }        
    }
    getCurrentFormattedTime(){
        const date = new Date;
        const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
        return String((`${hours}:${minutes}`));
    }
    start(){ 
        let currentDate = this.getCurrentFormattedTime();
        if (this.timerId === null){            
            this.timerId = setInterval(this.alarmCollection.forEach((alarm) => checkClock(alarm), 1000))
        }else{
            return this.timerId;
        }              
           
        function checkClock(alarm){            
            if(alarm.time == currentDate){
                alarm.callback();
            }
        }
        
                
    }
    stop(){
        if (this.timerId !== null){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms(){
        console.log(`Всего будильников: ${this.alarmCollection.length}`)
        this.alarmCollection.forEach(element => console.log(`Будильник №${element.id} заведен на ${element.time}`));
    }
    clearAlarms(){
        clearInterval(this.timerId);
        this.alarmCollection.length = 0;
        console.log(`Всего будильников: ${this.alarmCollection.length}`)
    }
    
}