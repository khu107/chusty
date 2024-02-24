// Task - G
function getHighestIndex(arr) {
  let max = Math.max(...arr);
  return arr.indexOf(max);
}
console.log(getHighestIndex([5, 21, 12, 21, 8]));
