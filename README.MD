# JavaScript Data Structures & Algorithms Basic to Advanced

**. Write a function to find a number in a Array and if not found in array then return -1?**

<details>
	<summary><b>View Answer</b></summary>
```javascript

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

</details> 
```

**. // Write a function that returns the even negative numbers in array ?**

<details>
	<summary><b>View Answer</b></summary>
```
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

</details>
```

**. Write a function that returns the even negative numbers in array and sum of that number?**

<details>
	<summary><b>View Answer</b></summary>
```
arr = [1, 3, 4, 6, -4, -6, 7, -8, 66, -77, -90, -33, -87];
let result = arr.filter(res=>res<0);
console.log("Negative values", result);
console.log("Negative values", result.length);
let total=result.reduce((sum,count)=>sum+count);
console.log("Total sum of -negative values", total);
</details>
```

**. Write a function that return Largest no in the Array?**

<details>
	<summary><b>View Answer</b></summary>
```
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

//second method by filter 

let largestNumber = (arr) => {
  // Filter the array to find the element that is greater than or equal to all others
  let result = arr.filter(num => arr.every(x => num >= x));
  return result[0]; // The first (and only) element is the largest
};

let arr = [3, 4, 5, 6, 7, 8, 9, 10, -5, -10, 11, 100];
let result = largestNumber(arr);
console.log(result); // Output: 100

</details>
```

**. Write a function to find Smallest no in Array?**

<details>
	<summary><b>View Answer</b></summary>
```
let smallestNumber= (arr)=>{
let smallest=Infinity;
for(let i=0;i<arr.length;i++){
  if(arr[i]<smallest){
    smallest=arr[i];
  }
}
return smallest;
}

let arr=[1,3,-3,5,7,-20,44,20,33,55,-100];
let result=smallestNumber(arr);
console.log("Smallest no from the array:",result);
</details>
```

**. Write a function that return Second Largest no in the Array?**

<details>
	<summary><b>View Answer</b></summary>
```
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

let arr = [1000,500,5,44,545,45,101,8,99,100,550,551];
let result = SecondLargestNumber(arr);
console.log(result);

</details>
```

**. Write write code for  below output ?**
      1
     12
    123
   1234
  12345
 123456

<details>
	<summary><b>View Answer</b></summary>
```
let n = 6;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += k;
  }
  console.log(row);
}
</details>
```




