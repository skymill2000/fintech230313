let array = [1, 2, 3, "test", "tes2", 1, 2, 3, 4, 6];
//java private String [] nameList = new String[5];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

console.log(array.length);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log("---------of-------------");

for (el of array) {
  console.log(el);
}

console.log("---------map-------------");
array.map((data) => {
  console.log(data);
});
