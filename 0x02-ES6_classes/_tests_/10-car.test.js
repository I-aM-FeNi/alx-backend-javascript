import Car from '../10-car.js';

describe('Car class', () => {
  test('Car constructor initializes attributes correctly', () => {
    const car = new Car('Toyota', 'V6', 'Red');

    expect(car._brand).toBe('Toyota');
    expect(car._motor).toBe('V6');
    expect(car._color).toBe('Red');
  });

  test('cloneCar method returns a new object of the same class', () => {
    class TestCar extends Car {}

    const tc1 = new TestCar('Nissan', 'Turbo', 'Pink');
    const tc2 = tc1.cloneCar();

    expect(tc2).toBeInstanceOf(TestCar);

    expect(tc1).not.toBe(tc2);

    expect(tc2._brand).toBeUndefined();
    expect(tc2._motor).toBeUndefined();
    expect(tc2._color).toBeUndefined();
  });
});

