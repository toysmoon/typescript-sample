import Vehicle from "./Vehicle";

export default class Bike extends Vehicle {
  public isRoadEmpty(vehicles: Vehicle[]) {
    return vehicles.length === 0;
  }
}
