export const ones = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
};
export const twentys = {
  1: "X",
  2: "XX",
  3: "XXX",
  4: "XL",
  5: "LV",
  6: "LX",
  7: "LXX",
  8: "LXXX",
  9: "XC",
};
export const hundreds = {
  1: "C",
  2: "CC",
  3: "CCC",
  4: "CD",
  5: "D",
  6: "DC",
  7: "DCC",
  8: "DCCC",
  9: "CM",
};
export const thousand = {
  1: "M",
  2: "MM",
  3: "MMM",
};

export function convertToRoman(num) {
  let len = num.toString().length;
  let result = "";
  if (len === 1) {
    result = ones[num.toString()];
  }
  if (len === 2) {
    for (let i = 1; i < len + 1; i++) {
      let firstnum = num.toString().substring(1, 2);
      let secondnum = num.toString().substring(0, 1);

      result = twentys[secondnum.toString()] + ones[firstnum.toString()];
      result = result.replaceAll("undefined", "");
    }
  }
  if (len === 3) {
    for (let i = 1; i < len + 1; i++) {
      let firstnum = num.toString().substring(3, 2);
      let secondnum = num.toString().substring(2, 1);
      let thirdnum = num.toString().substring(1, 0);

      result =
        hundreds[thirdnum.toString()] +
        twentys[secondnum.toString()] +
        ones[firstnum.toString()];
      result = result.replaceAll("undefined", "");
    }
  }
  if (len === 4) {
    for (let i = 1; i < len + 1; i++) {
      let firstnum = num.toString().substring(4, 3);
      let secondnum = num.toString().substring(3, 2);
      let thirdnum = num.toString().substring(2, 1);
      let fourtnum = num.toString().substring(1, 0);

      result =
        thousand[fourtnum.toString()] +
        hundreds[thirdnum.toString()] +
        twentys[secondnum.toString()] +
        ones[firstnum.toString()];

      result = result.replaceAll("undefined", "");
    }
  }

  return result;
}
