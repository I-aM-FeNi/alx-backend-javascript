import loadBalancer from '../7-load_balancer';

describe('loadBalancer', () => {
  test('should return the first resolved promise', async () => {
    const chinaDownload = new Promise((resolve) => setTimeout(resolve, 300, 'China download complete'));
    const USDownload = new Promise((resolve) => setTimeout(resolve, 100, 'US download complete'));

    const result = await loadBalancer(chinaDownload, USDownload);
    expect(result).toBe('US download complete');
  });

  test('should return the faster resolved promise', async () => {
    const chinaDownload = new Promise((resolve) => setTimeout(resolve, 100, 'China download complete'));
    const USDownload = new Promise((resolve) => setTimeout(resolve, 200, 'US download complete'));

    const result = await loadBalancer(chinaDownload, USDownload);
    expect(result).toBe('China download complete');
  });
});

