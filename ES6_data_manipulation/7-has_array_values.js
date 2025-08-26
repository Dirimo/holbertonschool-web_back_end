export default function hasValuesFromArray(set, values) {
  let boolean = false;
  for (let i = 0; i < values.length; i += 1) {
    if (set.has(values[i])) {
      boolean = true;
    } else {
      boolean = false;
    }
  }
  return boolean;
}
