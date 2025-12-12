export function sortAscending(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }

  if (arr.length === 0) {
    throw new Error('Array cannot be empty');
  }

  for (const element of arr) {
    if (typeof element !== 'number') {
      throw new TypeError(`Invalid element type: expected number, got ${typeof element}`);
    }
    if (!Number.isInteger(element)) {
      throw new TypeError(`Invalid element: ${element} is not an integer`);
    }
  }

  return [...arr].sort((a, b) => a - b);
}
