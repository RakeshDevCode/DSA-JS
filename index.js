let SecondLargestNumber = (arr) => {
  if (arr.length < 2 || arr.length < 1 ) return "No second largest.....";

  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest === -Infinity ? "No second Largest" : secondLargest;
};

let arr = [];
let result = SecondLargestNumber(arr);
console.log(result);
