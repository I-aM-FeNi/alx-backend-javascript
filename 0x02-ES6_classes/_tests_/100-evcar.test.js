import EVCar from '../100-evcar.js';
import Car from '../10-car.js';

describe('EVCar class', () => {
  it('should initialize attributes correctly', () => {
    const evCar = new EVCar('Tesla', 'Turbo', 'Red', '250');
    expect(evCar._brand).toBe('Tesla');
    expect(evCar._motor).toBe('Turbo');
    expect(evCar._color).toBe('Red');
    expect(evCar._range).toBe('250');
  });

  it('should return an instance of Car when cloneCar is called', () => {
    const evCar = new EVCar('Tesla', 'Turbo', 'Red', '250');
    const clonedCar = evCar.cloneCar();
    
    expect(clonedCar).toBeInstanceOf(Car);
    expect(clonedCar._brand).toBe('Tesla');
    expect(clonedCar._motor).toBe('Turbo');
    expect(clonedCar._color).toBe('Red');
    expect(clonedCar._range).toBeUndefined();
  });
});

