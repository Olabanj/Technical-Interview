const { toSentenceCase } = require('./test10.js');
describe('toSentenceCase', () => {
    test('converts string to sentence case', () => {
      expect(toSentenceCase('hello world')).toBe('Hello world');
    });
  
    test('handles empty string', () => {
      expect(toSentenceCase('')).toBe('');
    });
  
    test('handles single-word string', () => {
      expect(toSentenceCase('hello')).toBe('Hello');
    });
  
    test('handles already capitalized string', () => {
      expect(toSentenceCase('Hello World')).toBe('Hello world');
    });
  
    test('handles non-string input', () => {
      expect(toSentenceCase(123)).toBeNull();
    });
  });