import { Vehicle } from "../Vehicle";

export default class Road {
  private vehicleList: Vehicle[] = [];

  public getOn(vehicle: Vehicle): void {
    this.vehicleList.push(vehicle);
  }
  public getVehicleCount(): number {
    return this.vehicleList.length;
  }
  public isRoadEmpty(): boolean {
    return this.vehicleList.length === 0;
  }
}
