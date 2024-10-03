import HolbertonClass from '../8-hbtn_class.js';

describe('HolbertonClass', () => {
  let holbertonClass;

  beforeEach(() => {
    holbertonClass = new HolbertonClass(12, "Mezzanine");
  });

  test('should create an instance of HolbertonClass', () => {
    expect(holbertonClass).toBeInstanceOf(HolbertonClass);
    expect(holbertonClass.size).toBe(12);
    expect(holbertonClass.location).toBe("Mezzanine");
  });

  test('should cast to Number', () => {
    expect(Number(holbertonClass)).toBe(12);
  });

  test('should cast to String', () => {
    expect(String(holbertonClass)).toBe("Mezzanine");
  });
});

