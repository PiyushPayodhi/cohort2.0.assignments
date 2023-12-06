/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length === 0)
    return true;
    str = str.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"");
  let arr = str.toLowerCase().split('');
  for(i=0; i<arr.length; i++){
    if(arr[i] === arr[arr.length-1-i])
      return true;
    else
      return false;
  }
}

module.exports = isPalindrome;
