let arr = {
  name: 'daniel',
  age: 21,
};
for (elem in arr) {
  console.log(elem, arr[elem]);
}
/*
for (elem of arr) {
  console.log(elem);
}
*/
for (elem of Object.entries(arr)) {
  console.log(elem, arr[elem]);
}
for (elem of Object.keys(arr)) {
  console.log(elem, arr[elem]);
}
