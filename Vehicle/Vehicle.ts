import Wheel from './Wheel';

export default class Vehicle {
  public wheels: Wheel[];
  private numberOfWheels: number; // bigger than -1
  private fuel: number; // 0~100
  private rpm: number; // 0~10

  constructor(numberOfWheels: number = 4, typeOfWheel: string = 'iron', fuel: number = 0, rpm: number = 10) {
    this.numberOfWheels = numberOfWheels;
    this.wheels = [];
    this.fuel = fuel;
    this.rpm = rpm;
    for (let i = 0; i < numberOfWheels; i += 1) {
      this.wheels.push(new Wheel(typeOfWheel));
    }
  }

  public getNumberOfWheels(): number {
    return this.numberOfWheels;
  }

  public getFuel(): number {
    return this.fuel;
  }

  public drive(): void {
    this.wheels.forEach(wheel => wheel.setNewRPM(this.rpm));
  }
}
