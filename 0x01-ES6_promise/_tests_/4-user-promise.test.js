import signUpUser from '../4-user-promise';

describe('signUpUser', () => {
  it('should return a resolved promise with firstName and lastName', async () => {
    const firstName = 'Bob';
    const lastName = 'Dylan';
    
    const result = await signUpUser(firstName, lastName);

    expect(result).toEqual({
      firstName: 'Bob',
      lastName: 'Dylan',
    });
  });
});

