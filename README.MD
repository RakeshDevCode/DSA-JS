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
<details>
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
<details>
```

**. Write  a function that return Largest no in the Array?**
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
<details>
```

**. code**
<details>
	<summary><b>View Answer</b></summary>
```