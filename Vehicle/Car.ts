import Vehicle from "./Vehicle";

export default class Car extends Vehicle {
  static readonly NUMBER_OF_WHEELS = 4;

  constructor(fuel: number = 0, rpm: number = 8, material?: string) {
    super(Car.NUMBER_OF_WHEELS, material, fuel, rpm);
  }

  public isRoadEmpty(vehicles: Vehicle[]) {
    return vehicles.length === 0;
  }
}
