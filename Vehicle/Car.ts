import Vehicle from "./Vehicle";

export default class Car extends Vehicle {
  public isRoadEmpty(vehicles: Vehicle[]) {
    return vehicles.length === 0;
  }
}
