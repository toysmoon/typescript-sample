import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  constructor(fuel: number = 0, rpm: number = 8, material?: string) {
    const numberOfWheels = 4;
    super(numberOfWheels, material, fuel, rpm);
  }

  public isRoadEmpty(vehicles: Vehicle[]) {
    return vehicles.length === 0;
  }
}
