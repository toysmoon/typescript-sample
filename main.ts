import { Road } from './Road';
import { Car, Bike } from './Vehicle';

const road = new Road();
const car = new Car(100, 5, 'rubber');
const bike = new Bike(50, 8, 'rubber');

road.getOn([car, bike]);
car.drive();
bike.drive();

// console.log('All vehicles on road: ', road);
// console.log('isEmpty: ', road.isRoadEmpty());
