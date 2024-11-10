function insertionSortShift(arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];

    if (key < arr[i - 1]) {
      for (let j = i - 1; j >= 0 && key < arr[j]; j--) {
        let temp = arr[j];
        arr[j] = key;
        arr[j + 1] = temp;
        count++;
      }
    } else {
      continue;
    }
  }
  console.log("count:", count);

  return arr;
}

const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
const list2 = [1, 3, 4, 5, 6, 7, 2, 8, 9];

function insertionSortSwap(arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];

    if (key < arr[i - 1]) {
      for (let j = i - 1; j >= 0; j--) {
        if (key > arr[j]) {
          swap(i, j + 1);
          i = j + 1;
          console.log(arr);
        } else {
          continue;
        }
      }
    } else {
      continue;
    }
  }

  function swap(indexA, indexB) {
    const a = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = a;
  }
  return arr;
}

console.log(insertionSortSwap(list2));