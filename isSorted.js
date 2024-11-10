function isSorted(list) {
  let prev = list[0];
  for (let i = 1; i < list.length; i++) {
    const current = list[i];
    if (current < prev) {
      return false;
    } else {
      prev = current;
    }
  }
  return true;
}

function simpleSort(list) {
  for (let i = 0; i < list.length; i++) {
    const current = list[i];
    for (let j = i + 1; j < list.length; j++) {
      if (current > list[j + 1]) {
        swap(i, i + 1);
      }
    }
  }
  return list;

  function swap(indexA, indexB) {
    const a = list[indexA];
    const b = list[indexB];

    list[indexA] = b;
    list[indexB] = a;
  }
}

function insertionSort() {}

const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const test2 = [1, 2, 4, 5, 7, 9, 11];
const test3 = [2, 2, 3, 6, 8, 9, 9, 10, 10, 11, 12];
const test4 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const test5 = [1, 8, 9, 4, 6, 7, 2, 5, 3];
const test6 = [1, 2, 4, 4, 5, 3, 6, 7, 8];
const test7 = [4, 4, 4, 4, 4, 4, 4];

const testSimple = [1, 2, 3, 4, 6, 5, 7];

//console.log(isSorted(test1));
// console.log(isSorted(test2));
// console.log(isSorted(test3));
// console.log(isSorted(test4));
// console.log(isSorted(test5));
// console.log(isSorted(test6));
// console.log(isSorted(test7));

console.log(simpleSort(test1));
console.log(simpleSort(test2));
console.log(simpleSort(test3));
console.log(simpleSort(test4));
console.log(simpleSort(test5));
console.log(simpleSort(test6));
console.log(simpleSort(test7));
console.log(simpleSort(testSimple));
