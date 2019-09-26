export default class Wheel {
  public material: string;
  public rpm: number = 0;

  constructor(material: string) {
    this.material = material;
  }

  public setNewRPM(r: number) {
    this.rpm = r;
  }
}
