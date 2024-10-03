import asyncUploadUser from '../100-await';
import { uploadPhoto, createUser } from '../utils'; // Adjust the path as necessary

jest.mock('../utils', () => ({
    uploadPhoto: jest.fn(),
    createUser: jest.fn(),
}));

describe('asyncUploadUser', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mock calls and instances after each test
    });

    it('should return photo and user when both functions succeed', async () => {
        const mockPhotoResponse = { status: 200, body: 'photo-profile-1' };
        const mockUserResponse = { firstName: 'Guillaume', lastName: 'Salva' };

        // Mock the implementations
        uploadPhoto.mockResolvedValue(mockPhotoResponse);
        createUser.mockResolvedValue(mockUserResponse);

        const result = await asyncUploadUser();

        expect(result).toEqual({
            photo: mockPhotoResponse,
            user: mockUserResponse,
        });
    });

    it('should return null for photo and user when uploadPhoto fails', async () => {
        uploadPhoto.mockRejectedValue(new Error('File upload failed'));

        const result = await asyncUploadUser();

        expect(result).toEqual({
            photo: null,
            user: null,
        });
    });

    it('should return null for photo and user when createUser fails', async () => {
        uploadPhoto.mockResolvedValue({ status: 200, body: 'photo-profile-1' });
        createUser.mockRejectedValue(new Error('User creation failed'));

        const result = await asyncUploadUser();

        expect(result).toEqual({
            photo: null,
            user: null,
        });
    });

    it('should return null for photo and user when both functions fail', async () => {
        uploadPhoto.mockRejectedValue(new Error('File upload failed'));
        createUser.mockRejectedValue(new Error('User creation failed'));

        const result = await asyncUploadUser();

        expect(result).toEqual({
            photo: null,
            user: null,
        });
    });
});

