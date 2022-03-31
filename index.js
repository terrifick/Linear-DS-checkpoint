var arr1 = [3, 1, 7, 9];
var arr2 = [2, 4, 1, 9, 3];
var uniqueArr = [];

// function unique(arr1, arr2, uniqueArr) {
//   for (var i = 0; i < arr1.length; i++) {
//     flag = 0;
//     for (var j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         arr2.splice(j, 1);
//         j--;
//         flag = 1;
//       }
//     }

//     if (flag == 0) {
//       uniqueArr.push(arr1[i]);
//     }
//   }
//   uniqueArr.push(arr2);
//   return uniqueArr;
// }

function findSum(arr, n) {
  // sort all elements of array
  arr.sort();

  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] != arr[i + 1]) sum = sum + arr[i];
  }

  return sum;
}
