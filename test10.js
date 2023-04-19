function toSentenceCase(str) {
    if (typeof str !== 'string') {
      return null;
    }
  
    if (str === '') {
      return '';
    }
  
    const words = str.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    capitalizedWords[0] = capitalizedWords[0].charAt(0).toUpperCase() + capitalizedWords[0].slice(1);
  
    return capitalizedWords.join(' ');
  }
  console.log(toSentenceCase("hello world"))
  module.exports = toSentenceCase