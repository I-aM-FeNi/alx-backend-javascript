import uploadPhoto from '../5-photo-reject';

describe('uploadPhoto', () => {
  it('should reject the promise with an error message', async () => {
    const fileName = 'guillaume.jpg';

    try {
      await uploadPhoto(fileName);
    } catch (error) {
      expect(error).toEqual(new Error(`${fileName} cannot be processed`));
    }
  });
});

