import Vehicle from '../Vehicle';

type VehicleArgu = [number, string, number, number];

interface TestCase {
  argu: VehicleArgu;
  errorMsg: string;
}

test('Vehicle construct throw Error', () => {
  const testCases: TestCase[] = [
    { argu: [-1, 'iron', 0, 0], errorMsg: 'numberOfWheels must be bigger than -1' },
    { argu: [0, 'iron', -1, 0], errorMsg: 'fuel must be bigger than -1' },
    { argu: [0, 'iron', 101, 0], errorMsg: 'fuel must be smaller than 101' },
    { argu: [0, 'iron', 0, -1], errorMsg: 'rpm must be bigger than -1' },
    { argu: [0, 'iron', 0, 11], errorMsg: 'rpm must be smaller than 11' }
  ];

  testCases.forEach(({ argu, errorMsg }) => {
    try {
      const vehicle: Vehicle = new Vehicle(...argu);
    } catch (e) {
      expect(e.message).toBe(errorMsg);
    }
  });
});

test('Vehicle Fuel', () => {
  const vehicle = new Vehicle(4, 'iron', 100);
  expect(vehicle.getFuel()).toBe(100);
});

test('Vehicle Wheels length', () => {
  const vehicle = new Vehicle(4, 'iron', 100);
  expect(vehicle.wheels.length).toBe(4);
  expect(vehicle.getNumberOfWheels()).toBe(4);
});

test('Vehicle Wheels Rpm', () => {
  const vehicle = new Vehicle(4, 'iron', 100);
  vehicle.wheels.forEach(wheel => expect(wheel.rpm).toBe(0));
});

test('Vehicle Wheels Rpm after drive', () => {
  const vehicle = new Vehicle(4, 'iron', 100);
  vehicle.drive();
  vehicle.wheels.forEach(wheel => expect(wheel.rpm).toBe(10));
});
