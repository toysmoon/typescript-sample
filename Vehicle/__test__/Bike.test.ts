import Bike from "../Bike";

test("Bike Wheels length", () => {
  const bike = new Bike();
  expect(bike.wheels.length).toBe(2);
  expect(bike.getNumberOfWheels()).toBe(2);
});

test("Bike Fuel", () => {
  const bikes: Bike[] = [new Bike(), new Bike(30), new Bike(80)];
  const fuelResults: number[] = [0, 30, 80];
  bikes.forEach((bike, i) => {
    expect(bike.getFuel()).toBe(fuelResults[i]);
  });
});

test("Bike Fuel after drive", () => {
  const fuel = 78;
  const bike = new Bike(fuel);
  expect(bike.getFuel()).toBe(fuel);
});

test("Bike Wheels Rpm", () => {
  const bike = new Bike();
  bike.wheels.forEach(wheel => expect(wheel.rpm).toBe(0));
});

test("Bike Wheels Rpm after drive", () => {
  const bikeRpm: number[] = [5, 8];
  bikeRpm.forEach(rpm => {
    const bike = new Bike(100, rpm);
    bike.drive();
    bike.wheels.forEach(wheel => expect(wheel.rpm).toBe(rpm));
  });
});
