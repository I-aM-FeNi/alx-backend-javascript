import HolbertonCourse from '../2-hbtn_course';

describe('HolbertonCourse', () => {
  test('should create an instance of HolbertonCourse with valid attributes', () => {
    const course = new HolbertonCourse('ES6', 1, ['Alice', 'Bob']);
    expect(course.name).toBe('ES6');
    expect(course.length).toBe(1);
    expect(course.students).toEqual(['Alice', 'Bob']);
  });

  test('should set the name correctly', () => {
    const course = new HolbertonCourse('ES6', 1, ['Alice']);
    course.name = 'JavaScript';
    expect(course.name).toBe('JavaScript');
  });

  test('should throw a TypeError when setting name to a non-string', () => {
    const course = new HolbertonCourse('ES6', 1, ['Alice']);
    expect(() => {
      course.name = 123;
    }).toThrow(TypeError);
    expect(() => {
      course.name = null;
    }).toThrow(TypeError);
  });

  test('should throw a TypeError when creating with invalid name type', () => {
    expect(() => {
      new HolbertonCourse(123, 1, ['Alice']);
    }).toThrow(TypeError);
  });

  test('should set the length correctly', () => {
    const course = new HolbertonCourse('ES6', 1, ['Alice']);
    course.length = 2;
    expect(course.length).toBe(2);
  });

  test('should throw a TypeError when setting length to a non-number', () => {
    const course = new HolbertonCourse('ES6', 1, ['Alice']);
    expect(() => {
      course.length = 'two';
    }).toThrow(TypeError);
  });

  test('should throw a TypeError when creating with invalid length type', () => {
    expect(() => {
      new HolbertonCourse('ES6', '1', ['Alice']);
    }).toThrow(TypeError);
  });

  test('should set the students correctly', () => {
    const course = new HolbertonCourse('ES6', 1, ['Alice']);
    course.students = ['Bob', 'Charlie'];
    expect(course.students).toEqual(['Bob', 'Charlie']);
  });

  test('should throw a TypeError when setting students to a non-array', () => {
    const course = new HolbertonCourse('ES6', 1, ['Alice']);
    expect(() => {
      course.students = 'not an array';
    }).toThrow(TypeError);
  });

  test('should throw a TypeError when students array contains non-strings', () => {
    expect(() => {
      new HolbertonCourse('ES6', 1, ['Alice', 123]);
    }).toThrow(TypeError);
  });
});

