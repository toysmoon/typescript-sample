import Car from "../Car";
import Wheel from "../Wheel";

test("Car Wheels length", () => {
  const car = new Car(4, [new Wheel("wood"), new Wheel("wood"), new Wheel("wood"), new Wheel("wood")], 100);
  expect(car.wheels.length).toBe(4);
  expect(car.getNumberOfWheels()).toBe(4);
});

test("Car Fuel", () => {
  const car = new Car(4, [new Wheel("wood"), new Wheel("wood"), new Wheel("wood"), new Wheel("wood")], 100);
  expect(car.getFuel()).toBe(100);
});

test("Car Fuel after run", () => {
  const car = new Car(4, [new Wheel("wood"), new Wheel("wood"), new Wheel("wood"), new Wheel("wood")], 100);
  expect(car.getFuel()).toBe(100);
});

test("Car Wheels Rpm", () => {
  const car = new Car(4, [new Wheel("wood"), new Wheel("wood"), new Wheel("wood"), new Wheel("wood")], 100);
  car.wheels.forEach(wheel => expect(wheel.rpm).toBe(0));
});

test("Car Wheels Rpm after run", () => {
  const car = new Car(4, [new Wheel("wood"), new Wheel("wood"), new Wheel("wood"), new Wheel("wood")], 100);
  car.run();
  car.wheels.forEach(wheel => expect(wheel.rpm).toBe(5));
});
