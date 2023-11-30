const nums = [6, 5, 2, 3, 4, 1, 0];

// Remove each of the last two items with pop(), saving each item to a variable
const lastItem = nums.pop();
const secondLastItem = nums.pop();

// Remove each of the first two items with shift(), saving each item to a variable
const firstItem = nums.shift();
const secondItem = nums.shift();


// Use unshift and push to add the variables back to the array in numerical order, 0-6
nums.unshift(secondLastItem);
nums.unshift(lastItem);
nums.push(secondItem);
nums.push(firstItem);
