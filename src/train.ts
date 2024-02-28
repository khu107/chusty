// Task - H

function getPositive(arr: number[]): string {
  let result = "";
  arr.forEach((v) => (v > 0 ? (result += v) : null));
  return result;
}

console.log(getPositive([1, -4, 2]));
