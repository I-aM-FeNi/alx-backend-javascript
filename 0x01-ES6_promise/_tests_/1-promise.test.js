import getFullResponseFromAPI from '../1-promise';

describe('getFullResponseFromAPI', () => {
  test('should resolve with correct object when success is true', async () => {
    const response = await getFullResponseFromAPI(true);
    expect(response).toEqual({
      status: 200,
      body: 'Success',
    });
  });

  test('should reject with correct error message when success is false', async () => {
    await expect(getFullResponseFromAPI(false)).rejects.toThrow('The fake API is not working currently');
  });
});

