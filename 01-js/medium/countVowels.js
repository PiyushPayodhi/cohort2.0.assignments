/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let arr1 = str.toLowerCase().split('');
  let count = 0;
  for(i=0; i<arr1.length; i++){
    if(arr1[i] === 'a' || arr1[i] === 'e' || arr1[i] === 'i' || arr1[i] === 'o' || arr1[i] === 'u')
    count++;
    else
      arr1[i] = 0;
  }
  return count;
}

module.exports = countVowels;