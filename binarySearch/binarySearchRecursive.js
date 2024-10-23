let count = 0;

function binarySearchRecursive(search, values, start, end, comparator) {
  count++;
  console.group(`Recursion count: ${count}`);
  if (start > end) {
    console.groupEnd();
    count = 0;
    return -1;
  }

  let middle = Math.floor((end + start) / 2);

  let c = comparator(values[middle], search);

  console.log("start: ", start);
  console.log("end: ", end);
  console.log("middle: ", middle);
  console.log("c: ", c);

  if (c === 0) {
    console.groupEnd();
    count = 0;
    return middle;
  } else if (c < 0) {
    start = middle + 1;
    console.groupEnd();

    return binarySearchRecursive(search, values, start, end, comparator);
  } else if (c > 0) {
    end = middle - 1;
    console.groupEnd();
    return binarySearchRecursive(search, values, start, end, comparator);
  }
}

function compare(x, y) {
  return x - y;
}

function stringCompare(a, b) {
  return a.localeCompare(b);
}

export { binarySearchRecursive, compare, stringCompare };
