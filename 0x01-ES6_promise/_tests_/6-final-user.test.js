import handleProfileSignup from '../6-final-user';

describe('handleProfileSignup', () => {
  it('should return an array with the status and result of each promise', async () => {
    const result = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');
    
    expect(result).toEqual([
      {
        status: 'fulfilled',
        value: { firstName: 'Bob', lastName: 'Dylan' },
      },
      {
        status: 'rejected',
        value: new Error('bob_dylan.jpg cannot be processed'),
      }
    ]);
  });
});
