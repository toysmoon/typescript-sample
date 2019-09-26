import { Vehicle, Car, Bike } from "./Vehicle";
import Wheel from "./Vehicle/Wheel";

const road: Vehicle[] = [];

const car = new Car(4, [new Wheel("rubber"), new Wheel("rubber"), new Wheel("rubber"), new Wheel("ribber")], 100);

const bike = new Bike(2, [new Wheel("plastic"), new Wheel("plastic")], 50);

road.push(car);
road.push(bike);
car.run();
bike.start();

console.log("All vehicles on road: ", road);
console.log("isEmpty: ", car.isRoadEmpty(road));
