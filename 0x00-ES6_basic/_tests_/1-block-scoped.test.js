import taskBlock from '../1-block-scoped.js';

describe('taskBlock', () => {
  it('should return [false, true] when false is passed', () => {
    expect(taskBlock(true)).toEqual([true, false]);
  });

  it('should return [false, true] when false is passed', () => {
    expect(taskBlock(false)).toEqual([false, true]);
  });
});

