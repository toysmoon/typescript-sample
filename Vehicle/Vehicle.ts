import Wheel from "./Wheel";

export default class Vehicle {
  private numberOfWheels: number; // bigger than -1
  public wheels: Wheel[];
  private fuel: number; // 0~100
  private rpm: number; // 0~10

  constructor(numberOfWheels: number, wheels: Wheel[], fuel: number, rpm: number = 10) {
    this.numberOfWheels = numberOfWheels;
    this.wheels = wheels;
    this.fuel = fuel;
    this.rpm = rpm;
  }
  public getNumberOfWheels() {
    return this.numberOfWheels;
  }

  public getFuel() {
    return this.fuel;
  }

  public drive() {
    this.wheels.forEach(wheel => wheel.setNewRPM(this.rpm));
  }
}
