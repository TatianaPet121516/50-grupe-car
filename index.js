import { Car } from "./js/car.js";

const audi = new Car ('Audi', '80' ,"black", 68, 7.4);

console.log(audi);
console.log(audi.startTheEngine());
// console.log(audi.startTheEngine());
console.log(audi.startDriving());
console.log(audi.startDriving());
console.log(audi.driving());
console.log(audi);
console.log(audi.driving());
console.log(audi.driving());
console.log(audi.driving());
console.log(audi.driving());
console.log(audi.driving());
console.log(audi.driving());
console.log(audi.driving());    //neužtenka degalų toliau važiuoti
 
console.log(audi.remainingFuel());
console.log(audi.fillingTheFuelTank(80));
console.log(audi.toStop());
console.log(audi);

console.log(audi.fillingTheFuelTank(80));
console.log(audi.stopTheEngine());
// console.log(audi);

console.log(audi.fillingTheFuelTank(80));
console.log(audi.fillingTheFuelTank(60));

console.log(audi);

