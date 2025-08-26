export default function getListStudentsIds(obj) {
  if (typeof obj === 'object') {
    return obj.map((student) => student.id);
  }
  return [];
}
