//6a.
function removeDuplicates(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
      if (newString.indexOf(string[i]) === -1) {
        newString += string[i];
      }
    }
    return newString;
  }
  let string1 ="Hello"
  let newString1 = removeDuplicates(string1)
  console.log(newString1)
  //6b
  function removeDuplicates(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
      if (newString.indexOf(string[i]) === -1) {
        newString += string[i];
      }
    }
    return newString;
  }
  let string2 ="Concatenate"
  let newString2 = removeDuplicates(string2)
  console.log(newString2)

