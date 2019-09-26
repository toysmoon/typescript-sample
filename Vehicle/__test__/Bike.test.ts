import Bike from "../Bike";
import Wheel from "../Wheel";

test("Bike Wheels length", () => {
  const bike = new Bike(4, [new Wheel("plastic"), new Wheel("plastic"), new Wheel("plastic"), new Wheel("plastic")], 100);
  expect(bike.wheels.length).toBe(4);
  expect(bike.getNumberOfWheels()).toBe(4);
});

test("Bike Fuel", () => {
  const bike = new Bike(4, [new Wheel("plastic"), new Wheel("plastic"), new Wheel("plastic"), new Wheel("plastic")], 100);
  expect(bike.getFuel()).toBe(100);
});

test("Bike Fuel after start", () => {
  const bike = new Bike(4, [new Wheel("plastic"), new Wheel("plastic"), new Wheel("plastic"), new Wheel("plastic")], 100);
  expect(bike.getFuel()).toBe(100);
});

test("Bike Wheels Rpm", () => {
  const bike = new Bike(4, [new Wheel("plastic"), new Wheel("plastic"), new Wheel("plastic"), new Wheel("plastic")], 100);
  bike.wheels.forEach(wheel => expect(wheel.rpm).toBe(0));
});

test("Bike Wheels Rpm after start", () => {
  const bike = new Bike(4, [new Wheel("plastic"), new Wheel("plastic"), new Wheel("plastic"), new Wheel("plastic")], 100);
  bike.start();
  bike.wheels.forEach(wheel => expect(wheel.rpm).toBe(8));
});
