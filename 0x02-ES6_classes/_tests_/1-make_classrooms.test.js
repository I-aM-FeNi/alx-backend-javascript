import initializeRooms from '../1-make_classrooms';

describe('initializeRooms', () => {
  test('should return an array of ClassRoom instances with sizes 19, 20, and 34', () => {
    const rooms = initializeRooms();
    expect(rooms.length).toBe(3);
    expect(rooms[0]._maxStudentsSize).toBe(19);
    expect(rooms[1]._maxStudentsSize).toBe(20);
    expect(rooms[2]._maxStudentsSize).toBe(34);
  });
});

