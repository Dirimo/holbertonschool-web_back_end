export default function setFromArray(array) {
  const mySet = new Set();
  if (Array.isArray(array)) {
    for (const item of array) {
      mySet.add(item);
    }
  }
  return mySet;
}
