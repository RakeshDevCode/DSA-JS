  let SecondLargestNumber = (arr) => {
    let largest = arr[0];
    let secondLargest=arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest=largest;
        largest = arr[i];
      }
    }
    return secondLargest;
  };

  let arr = [99,3, 4, 5, 6, 7, 8, 9, 10, -5, -10, 11,50,100,101];
  let result=SecondLargestNumber(arr);
  console.log(result);