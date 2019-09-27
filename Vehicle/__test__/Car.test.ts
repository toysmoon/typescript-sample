import Car from '../Car';

test('Car Wheels length', () => {
  const car = new Car(100, 8);
  expect(car.wheels.length).toBe(4);
  expect(car.getNumberOfWheels()).toBe(4);
});

test('Car Fuel', () => {
  const cars: Car[] = [new Car(), new Car(30), new Car(80)];
  const fuelResults: number[] = [0, 30, 80];
  cars.forEach((car, i) => {
    expect(car.getFuel()).toBe(fuelResults[i]);
  });
});

test('Car Fuel after drive', () => {
  const car = new Car(100, 8);
  expect(car.getFuel()).toBe(100);
});

test('Car Wheels Rpm', () => {
  const car = new Car(100, 8);
  car.wheels.forEach(wheel => expect(wheel.rpm).toBe(0));
});

test('Car Wheels Rpm after drive', () => {
  const carRpm: number[] = [5, 8];
  carRpm.forEach(rpm => {
    const car = new Car(100, rpm);
    car.drive();
    car.wheels.forEach(wheel => expect(wheel.rpm).toBe(rpm));
  });
});
