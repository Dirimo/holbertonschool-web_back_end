export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  } else {
    const buffer = new ArrayBuffer(length);
    const myView = new DataView(buffer, 0, length);
    myView.setInt8(position, value);
    return myView;
  }
}
