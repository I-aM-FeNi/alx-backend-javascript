import handleProfileSignup from '../3-all';
import { uploadPhoto, createUser } from '../utils';

jest.mock('../utils');

describe('handleProfileSignup', () => {
  it('should log user info when both promises resolve', async () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    
    uploadPhoto.mockResolvedValue({ body: 'photo-profile-1' });
    createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

    await handleProfileSignup();

    expect(consoleLogSpy).toHaveBeenCalledWith('photo-profile-1 Guillaume Salva');
    
    consoleLogSpy.mockRestore();
  });

  it('should log "Signup system offline" when a promise rejects', async () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    uploadPhoto.mockResolvedValue({ body: 'photo-profile-1' });
    createUser.mockRejectedValue(new Error('Error creating user'));

    await handleProfileSignup();

    expect(consoleLogSpy).toHaveBeenCalledWith('Signup system offline');
    
    consoleLogSpy.mockRestore();
  });
});

