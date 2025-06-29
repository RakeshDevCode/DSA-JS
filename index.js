// Write  a function that return Largest no in the Array

let largestNumber = (arr) => {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(largest);
};

let arr = [3, 4, 5, 6, 7, 8, 9, 10, -5, -10, 11, 100];
largestNumber(arr);




