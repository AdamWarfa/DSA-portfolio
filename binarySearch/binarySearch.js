function binarySearch(search, values, compFunc) {
  let min = 0;
  let max = values.length - 1;
  let count = 0;

  while (min <= max) {
    count++;
    let middle = Math.floor((max + min) / 2);

    let c = compFunc(values[middle], search);
    if (c === 0) {
      console.log("count: " + count);
      return values[middle];
    } else if (c < 0) {
      min = middle + 1;
      console.log("min: " + min, "max: " + max);
    } else if (c > 0) {
      max = middle - 1;
      console.log("min: " + min, "max: " + max);
    }
  }
  console.log("count: " + count);
  return -1;
}

function compare(x, y) {
  return x - y;
}

function stringCompare(a, b) {
  return a.localeCompare(b);
}

function nameCompare(a, b) {
  return a.name.localeCompare(b.name);
}

export { binarySearch, compare, stringCompare, nameCompare };
