import Vehicle from "../Vehicle";
import Wheel from "../Wheel";

test("Vehicle Fuel", () => {
  const vehicle = new Vehicle(4, [new Wheel("ion"), new Wheel("ion"), new Wheel("ion"), new Wheel("ion")], 100);
  expect(vehicle.getFuel()).toBe(100);
});

test("Vehicle Wheels length", () => {
  const vehicle = new Vehicle(4, [new Wheel("ion"), new Wheel("ion"), new Wheel("ion"), new Wheel("ion")], 100);
  expect(vehicle.wheels.length).toBe(4);
  expect(vehicle.getNumberOfWheels()).toBe(4);
});

test("Vehicle Wheels Rpm", () => {
  const vehicle = new Vehicle(4, [new Wheel("ion"), new Wheel("ion"), new Wheel("ion"), new Wheel("ion")], 100);
  vehicle.wheels.forEach(wheel => expect(wheel.rpm).toBe(0));
});

test("Vehicle Wheels Rpm after drive", () => {
  const vehicle = new Vehicle(4, [new Wheel("ion"), new Wheel("ion"), new Wheel("ion"), new Wheel("ion")], 100);
  vehicle.drive();
  vehicle.wheels.forEach(wheel => expect(wheel.rpm).toBe(10));
});
