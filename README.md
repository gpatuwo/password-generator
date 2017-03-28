## Password Generator

### Rules
1. 12 characters long
2. lower-case alphabet, upper-case, 0-9 numbers and punctuations
3. each character is randomly generated

### How to generate chars?

#### source
- brute force (aka write them out)
  - complete strings (eg "abc...yz")
  - string arrays (eg ['a', 'b'...'z'])
    - would be v annoying to type out
  - separate categories vs all in one
- ASCII/Unicode range
  - 33-126 code range
  - need to convert back to char
    - [String.fromCharCode( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
    - input is sequence of unicode values

#### randomization
Math.floor(Math.random() * (max-min)) + min
