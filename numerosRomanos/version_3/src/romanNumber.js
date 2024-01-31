
export function convertRomanNumber(number) {

  const romanNumerals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };
  console.time();
  let result = "";

  const keys = Object.keys(romanNumerals)
    .map(Number)
    .sort((a, b) => b - a);

  for (const key of keys) {
    while (number >= key) {
      result += romanNumerals[key];
      number -= key;
    }
  }
  console.timeEnd();
  return result;
}
