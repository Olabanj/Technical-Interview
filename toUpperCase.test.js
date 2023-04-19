const { toUpperCase } = require('./test9.js');
describe('toUpperCase', () => {
    it('converts lowercase string to uppercase', () => {
      const result = toUpperCase('hello world');
      expect(result).toEqual('HELLO WORLD');
    });
  
    it('leaves uppercase string unchanged', () => {
      const result = toUpperCase('HELLO WORLD');
      expect(result).toEqual('HELLO WORLD');
    });
  
    it('handles empty string', () => {
      const result = toUpperCase('');
      expect(result).toEqual('');
    });
  
    it('handles non-string input', () => {
      const result = toUpperCase(123);
      expect(result).toEqual(null);
    });
  });
  
