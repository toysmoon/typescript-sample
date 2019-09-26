import Vehicle from "./Vehicle";

export default class Bike extends Vehicle {
  static readonly NUMBER_OF_WHEELS = 2;

  constructor(fuel: number = 0, rpm: number = 8, material?: string) {
    super(Bike.NUMBER_OF_WHEELS, material, fuel, rpm);
  }

  public isRoadEmpty(vehicles: Vehicle[]) {
    return vehicles.length === 0;
  }
}
