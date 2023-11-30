const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// Find the first index of "a", "b", and "c"
const firstIndexA = arr.indexOf("a");
const firstIndexB = arr.indexOf("b");
const firstIndexC = arr.indexOf("c");

console.log(`First index of "a": ${firstIndexA}`);
console.log(`First index of "b": ${firstIndexB}`);
console.log(`First index of "c": ${firstIndexC}`);

// Find the last index of "a", "b", and "c"
const lastIndexA = arr.lastIndexOf("a");
const lastIndexB = arr.lastIndexOf("b");
const lastIndexC = arr.lastIndexOf("c");

console.log(`Last index of "a": ${lastIndexA}`);
console.log(`Last index of "b": ${lastIndexB}`);
console.log(`Last index of "c": ${lastIndexC}`);

// If the first index and last index of "a" is not the same, remove the last instance
// Repeat until there is just one "a"
while (firstIndexA !== arr.lastIndexOf("a")) {
    arr.splice(arr.lastIndexOf("a"), 1);
}

console.log(arr);
