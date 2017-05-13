import { CapitalizeFirstPipe } from './capitalize-first.pipe';

describe('CapitalizeFirstPipe', () => {
  let pipe: CapitalizeFirstPipe;

  beforeEach(() => {
    pipe = new CapitalizeFirstPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('capitalizes a string', () => {
    expect(pipe.transform('test')).toBe('Test');
  });

  it('returns an empty string when called with an empty string', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('returns an empty string when called with a null', () => {
    expect(pipe.transform(null)).toBe('');
  });
});
