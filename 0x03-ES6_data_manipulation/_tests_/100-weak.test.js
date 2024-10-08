import { queryAPI, weakMap } from '../100-weak.js';

describe('queryAPI', () => {
  it('should track the number of times queryAPI is called for each endpoint', () => {
    const endpoint = { protocol: 'http', name: 'getUsers' };

    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(1);

    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(2);

    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);

    expect(() => {
      queryAPI(endpoint);
    }).toThrow('Endpoint load is high');
  });
});

