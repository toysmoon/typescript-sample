import { Vehicle } from "../Vehicle";
import { arrayTypeAnnotation } from "@babel/types";

export default class Road {
  private vehicleList: Vehicle[] = [];

  public getOn(vehicle: Vehicle | Vehicle[]): void {
    const newVehicleList = Array.isArray(vehicle) ? vehicle : [vehicle];
    this.vehicleList = this.vehicleList.concat(newVehicleList);
  }
  public getVehicleCount(): number {
    return this.vehicleList.length;
  }
  public isRoadEmpty(): boolean {
    return this.vehicleList.length === 0;
  }
}
