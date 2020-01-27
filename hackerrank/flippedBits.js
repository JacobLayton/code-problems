function flippingBits(N) {
  const binaryString = numberToBinaryString(N);

  const binaryStringWithZeros = prependZerosToBinaryString(binaryString);

  const flippedBinaryString = flipbits(binaryStringWithZeros);

  const result = binaryStringtoNumber(flippedBinaryString);

  return result;
}

function numberToBinaryString(number) {
  const binary = parseInt(number, 10).toString(2);
  return binary;
}

function prependZerosToBinaryString(binary) {
  const binaryStringLength = binary.length;
  let stringOfZeros = "00000000000000000000000000000000";
  let zerosToKeep = 32 - binaryStringLength;
  let fullBinaryString;
  if (binaryStringLength < 32) {
    let zeroSubstring = stringOfZeros.slice(0, zerosToKeep);
    fullBinaryString = zeroSubstring + binary;
  }
  return fullBinaryString;
}

function flipbits(string) {
  let flippedString = string
    .split("")
    .map((b) => (1 - b).toString())
    .join("");
  return flippedString;
}

function binaryStringtoNumber(string) {
  let result = parseInt(string, 2);
  return result;
}

console.log(flippingBits(2147483647)); // expected output: 2147483648
console.log(flippingBits(1)); // expected output: 4294967294
console.log(flippingBits(0)); // expected output: 4294967295
