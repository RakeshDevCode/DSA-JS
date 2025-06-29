# // #Write a function to find a number in a Array and if not found in array then return -1 

let searchElement=(arr,num)=>{
for(let i=0;i<arr.length;i++)
{ if(num===arr[i]){
    return i;
    }  
}
return -1;
}

let arr=[2,3,4,5,6,7,8,9,10];
console.log(searchElement(arr,77));
     
// Write a function that returns the even negative numbers in array

let negatiuveNumbers = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 && arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  return { negatives: newArr, count: newArr.length };
};
arr = [1, 3, 4, 6, -4, -6, 7, -8, 66, -77, -90, -33, -87];
let result = negatiuveNumbers(arr);
console.log("Negative values", result.negatives);
console.log("total no:", result.count);

// Write a function that returns the even negative numbers in array and sum of that number;

arr = [1, 3, 4, 6, -4, -6, 7, -8, 66, -77, -90, -33, -87];
let result = arr.filter(res=>res<0);
console.log("Negative values", result);
console.log("Negative values", result.length);
let total=result.reduce((sum,count)=>sum+count);
console.log("Total sum of -negative values", total);

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

# JavaScript-100-objective-based-questions


**1. Can we connect JavaScript Directly with Actual Database. can you give reason of it ?**
```js
a) Yes;
b) No;
c) Sometime;
d) Some Database
```
<details>
	<summary><b>View Answer</b></summary>
<ul>
Answer: b) No
</ul>
</details>