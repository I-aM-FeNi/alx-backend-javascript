import ClassRoom from '../0-classroom';

describe('ClassRoom', () => {
  test('should create an instance of ClassRoom with maxStudentsSize', () => {
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
  });

  test('should create an instance of ClassRoom with another maxStudentsSize', () => {
    const room = new ClassRoom(5);
    expect(room._maxStudentsSize).toBe(5);
  });
});

