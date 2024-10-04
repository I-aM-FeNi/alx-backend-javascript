import getNeighborhoodsList from '../2-arrow.js';

describe('getNeighborhoodsList', () => {
  let neighborhoodsList;

  beforeEach(() => {
    neighborhoodsList = new getNeighborhoodsList();
  });

  it('should return the updated list of neighborhoods when a new neighborhood is added', () => {
    const result = neighborhoodsList.addNeighborhood('Noe Valley');
    expect(result).toEqual(['SOMA', 'Union Square', 'Noe Valley']);
  });

  it('should return the correct list of neighborhoods after adding multiple neighborhoods', () => {
    neighborhoodsList.addNeighborhood('Noe Valley');
    neighborhoodsList.addNeighborhood('Chinatown');
    const result = neighborhoodsList.addNeighborhood('Mission District');
    expect(result).toEqual(['SOMA', 'Union Square', 'Noe Valley', 'Chinatown', 'Mission District']);
  });

  it('should return the initial list if no neighborhood is added', () => {
    const result = neighborhoodsList.sanFranciscoNeighborhoods;
    expect(result).toEqual(['SOMA', 'Union Square']);
  });
});

