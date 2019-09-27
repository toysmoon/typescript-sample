import Wheel from './Wheel';

interface ValidateNumber {
  key: 'numberOfWheels' | 'fuel' | 'rpm';
  min: number | boolean;
  max: number | boolean;
}

export default class Vehicle {
  public wheels: Wheel[];
  private numberOfWheels: number; // bigger than -1
  private fuel: number; // 0~100
  private rpm: number; // 0~10
  private readonly validateRules: ValidateNumber[] = [
    { key: 'numberOfWheels', min: 0, max: false },
    { key: 'fuel', min: 0, max: 100 },
    { key: 'rpm', min: 0, max: 10 }
  ];

  constructor(numberOfWheels: number = 4, typeOfWheel: string = 'iron', fuel: number = 0, rpm: number = 10) {
    this.numberOfWheels = numberOfWheels;
    this.wheels = [];
    this.fuel = fuel;
    this.rpm = rpm;
    this.validateRules.forEach(this.validateNumber);
    for (let i = 0; i < numberOfWheels; i += 1) {
      this.wheels.push(new Wheel(typeOfWheel));
    }
  }

  public validateNumber = ({ key, min, max }: ValidateNumber): void => {
    const minMsg = `${key} must be bigger than ${(min as number) - 1}`;
    const maxMsg = `${key} must be smaller than ${(max as number) + 1}`;
    if (min !== false && this[key] < min) {
      throw Error(minMsg);
    }
    if (max !== false && this[key] > max) {
      throw Error(maxMsg);
    }
  };

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
