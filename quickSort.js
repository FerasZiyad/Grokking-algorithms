// [1,2,3,4]

/*
Base case : if the array length is zero
*/
/* 4.1 */
function sum(arr) {
  if (arr.length === 0) return 0;
  else {
    const lastNumber = arr.pop();
    return lastNumber + sum(arr);
  }
}

/* 4.2 */
/* Base case : if the length is zero we need to return 0 */
function countItems(arr) {
  if (arr.length === 0) return 0;
  arr.pop();
  return 1 + countItems(arr);
}

/* 4.3 */
/* Base case : if the length is zero them return zero */

function findMaximum(arr) {
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) {
    if (arr[0] > arr[1]) return arr[0];
    else return arr[1];
  }
  sub_max = findMaximum(arr.slice(1));
  if (arr[0] > sub_max) return arr[0];
  else return sub_max;
}
