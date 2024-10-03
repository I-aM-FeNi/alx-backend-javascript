import guardrail from '../9-try';
import divideFunction from '../8-try';

describe('guardrail', () => {
  it('should return the result of the math function and "Guardrail was processed" when no error occurs', () => {
    const result = guardrail(() => divideFunction(10, 2));
    expect(result).toEqual([5, 'Guardrail was processed']);
  });

  it('should catch the error and return the error message and "Guardrail was processed" when an error occurs', () => {
    const result = guardrail(() => divideFunction(10, 0));
    expect(result).toEqual(['Error: cannot divide by 0', 'Guardrail was processed']);
  });
});

