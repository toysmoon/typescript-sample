import Vehicle from './Vehicle';

export default class Bike extends Vehicle {
  constructor(fuel: number = 0, rpm: number = 8, material?: string) {
    const numberOfWheels = 2;
    super(numberOfWheels, material, fuel, rpm);
  }

  public isRoadEmpty(vehicles: Vehicle[]) {
    return vehicles.length === 0;
  }
}
