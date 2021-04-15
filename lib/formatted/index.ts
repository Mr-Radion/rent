/* eslint-disable @typescript-eslint/no-shadow */
export const commasAndSpaces = (items: any[]): any[] =>
  items.map((item, index): any => {
    if (index !== items.length - 1) return `${item}, `;
    return item;
  });

export const numberIntervalsFormatted = (numbers: string | number): any => {
  const arr = [...String(numbers)];
  if (String(numbers).length === 4) arr.splice(1, 0, ' ');
  if (String(numbers).length === 5) arr.splice(2, 0, ' ');
  if (String(numbers).length === 7) {
    arr.splice(1, 0, ' ');
    arr.splice(5, 0, ' ');
  }
  return arr.join('');
};

export const priceNumberRound = (number: string | number): string => {
  const num = Number(number);
  let numberFormatted = '';
  switch (true) {
    case number < 1000:
      // numberFormatted = `${Number((num / 1).toFixed(1)) * 1}`;
      numberFormatted = `${number}`;
      break;
    case number >= 1000 && number < 1_000_000:
      numberFormatted = `${(num / 1000).toFixed(1)} ths`;
      break;
    case number >= 1_000_000 && number < 1_000_000_000:
      numberFormatted = `${(num / 1_000_000).toFixed(1)} m`;
      break;
    case number >= 1_000_000_000:
      numberFormatted = `${(num / 1_000_000_000).toFixed(1)} bln`;
      break;

    default:
      break;
  }
  return numberFormatted;
};

export const numberDivisionFormatted = (numbers: number[], type: string[]): any[] | string => {
  const numberFormatted = numbers.map((number, index): any => {
    // remove the comma from the last number
    if (index !== numbers.length - 1) {
      if (numbers[index + 1] - number >= 2) {
        return `${number} - `;
      }
      return `${number}, `;
    }
    return (
      `${number} ${numbers.length > 1 ? 'bedrooms' : 'bedroom'}` + // short bed
      `${type.map((elem, index) =>
        elem !== undefined && index === 0 ? `, ${elem.toLowerCase()}` : '',
      )}`
    );
  });
  if (numberFormatted.length !== 0) return numberFormatted;
  if (numberFormatted.length === 0 && type.length !== 0) return type;
  return null;
};

export const sortedAscending = (numbers: number[]): Array<number> => {
  const sorted = numbers.sort((a, b) => a - b);
  return sorted;
};

export const sortedAlphabetically = (sting: string[]): Array<string> => {
  const sorted = sting.sort();
  return sorted;
};

export const sortedArrayToString = (array: string[]): string => array.splice(1, 0, ' ').join('');
