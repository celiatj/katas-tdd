const numRom1 = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const numRom2 = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const numRom3 = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const numNaturales1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export function romanos(ejemploNumero) {
  let result = "";
  let vectorCentenas = centenas(ejemploNumero);

  result += numRom3[vectorCentenas];

  let vectorDecenas = decenas(ejemploNumero);
  result += numRom2[vectorDecenas];

  let vectorUnidades = unidades(ejemploNumero);
  result += numRom1[vectorUnidades];

  return result;
}

function centenas(ejemploNumero) {
  let vectorCentenas = Math.floor(ejemploNumero / 100);
  return vectorCentenas;
}

function decenas(ejemploNumero) {
  let vectorDecenas = Math.floor((ejemploNumero % 100) / 10);
  return vectorDecenas;
}

function unidades(ejemploNumero) {
  let vectorUnidades = ejemploNumero % 10;
  return vectorUnidades;
}
