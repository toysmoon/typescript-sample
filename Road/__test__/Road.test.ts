import Road from "../Road";
import { Car, Bike } from "../../Vehicle";

describe("Road", () => {
  let road: Road;

  beforeEach(() => {
    road = new Road();
  });

  it("function isRoadEmpty", () => {
    expect(road.isRoadEmpty()).toBe(true);
    road.getOn(new Car());
    expect(road.isRoadEmpty()).toBe(false);
  });

  it("function getOn(Vehicle)", () => {
    const car = new Car();
    const bike = new Bike();
    road.getOn(car);
    road.getOn(bike);
    expect(road.getVehicleCount()).toBe(2);
  });

  it("function getOn(Vehicle:[]])", () => {
    const car = new Car();
    const bike = new Bike();
    road.getOn([car, bike]);
    expect(road.getVehicleCount()).toBe(2);
  });

  it("function getVehicleCount", () => {
    const car = new Car();
    const bike = new Bike();
    expect(road.getVehicleCount()).toBe(0);
    road.getOn(car);
    expect(road.getVehicleCount()).toBe(1);
    road.getOn(bike);
    expect(road.getVehicleCount()).toBe(2);
  });
});
