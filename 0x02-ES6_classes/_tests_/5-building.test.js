import Building from '../5-building';

describe('Building Class', () => {
  test('should create a building object with correct sqft', () => {
    const building = new Building(100);
    expect(building.sqft).toBe(100);
  });

  test('should throw an error if subclass does not implement evacuationWarningMessage', () => {
    class TestBuilding extends Building {}
    expect(() => new TestBuilding(200)).toThrowError('Class extending Building must override evacuationWarningMessage');
  });

  test('should not throw an error if subclass implements evacuationWarningMessage', () => {
    class SafeBuilding extends Building {
      evacuationWarningMessage() {
        return 'Evacuate now!';
      }
    }
    const building = new SafeBuilding(150);
    expect(building.sqft).toBe(150);
    expect(building.evacuationWarningMessage()).toBe('Evacuate now!');
  });
});

