// function evenTow(n) {
//   let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//   let b = a.filter((x) => x % 2 == 0);
//   return b;
// }
// evenTow(2);

// // index 0        1        2
// let a = ["abhi","sachin","fiza"]
// let b = a.slice(0,1)
// console.log(b)

// let a = ["a","b","c","d"]
// a.splice(0,1)
// console.log(a)

// var myString = "An,array,in,a,string,separated,by,a,comma";
// var myArray = myString.split(",");
// console.log(myArray);

// var a = {
//   b: "hello",
//   c: "world",
//   d: getALll,
//   e: () =>
//     function () {
//       console.log(this.b);
//     },
// };

// function getALll() {
//   console.log(this.b);
// }
// console.log(a.d);

// function summation(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// function summation (n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n + summation(n - 1);
// }

// function summation (n) {
//   return (n * (n + 1)) / 2;
// }

// console.log(summation(4));

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {
//   const numsObjs = {}; // create nums obj with value as key and index as value eg: [2,7,11,15] => {2: 0, 7: 1, 11: 2, 15: 3}

//   for (let i = 0; i < nums.length; i++) {
//     const currentValue = nums[i];

//     if (target - currentValue in numsObjs) {
//       return [numsObjs[target - currentValue] , i];
//     }
//     numsObjs[nums[i]] = i;
//   }

//   return [-1, -1];

// };

// console.log(twoSum([2, 7, 11, 15], 9));

// function fibonacci(n) {
//   const fib = [0, 1];

//   for (let index = 2; index < n; index++) {
//     fib[index] = fib[index - 1] + fib[index - 2];
//   }

//   return fib;
// }

// console.log(fibonacci(10)); // [0,1]
// console.log(fibonacci(3)); // [0,1,1]
// console.log(fibonacci(7)); // [0,1,1,2,3,5,8]
