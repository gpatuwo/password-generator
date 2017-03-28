function generatePassword() {
  let codeArray = [];
  // randomly select 12 num 33-126
  while (codeArray.length < 12) {
    var codeGen = Math.floor(Math.random() * (127 - 33)) + 33;
    codeArray.push(codeGen);
  }

  // console.log(`code arr: ${codeArray}`);

  // convert num to string char
  let charArray = [];
  for (var i = 0; i < 12; i++) {
    // console.log(String.fromCharCode(codeArray[i]));
    charArray.push(String.fromCharCode(codeArray[i]));
  }

  // console.log(`charArray: ${charArray}`);

  // output 12-char string
  return charArray.join('');
}

console.log(generatePassword());
