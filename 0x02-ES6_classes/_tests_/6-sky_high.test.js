import SkyHighBuilding from '../6-sky_high';

describe('SkyHighBuilding Class', () => {
  test('should create a SkyHighBuilding object with correct attributes', () => {
    const building = new SkyHighBuilding(140, 60);
    expect(building.sqft).toBe(140);
    expect(building.floors).toBe(60);
  });

  test('should return correct evacuation warning message', () => {
    const building = new SkyHighBuilding(140, 60);
    expect(building.evacuationWarningMessage()).toBe('Evacuate slowly the 60 floors');
  });
});

