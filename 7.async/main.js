// тут вы можете вызывать функции из task.js
clock = new AlarmClock();

clock.addClock("11:47", () => console.log("Подъем!"), 1);
clock.addClock("11:48", () => console.log("Вставай!"), 2);
clock.addClock("11:49", () => console.log("Ну вставай уже!"), 3);
clock.addClock("11:34", () => console.log("Опаздываешь!"), 4);

clock.removeClock(2);

clock.getCurrentFormattedTime()
clock.printAlarms()

clock.start();
console.log(clock.timerId);
clock.stop();
console.log(clock.timerId);

clock.clearAlarms();