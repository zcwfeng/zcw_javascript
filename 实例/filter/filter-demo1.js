//filter
'use strict';
// demo1
var demo = ['A', 'B', 'C'];
var rdemo = demo.filter(function (element, index, self) {
    console.log(element); // 依次打印'A', 'B', 'C'
    console.log(index); // 依次打印0, 1, 2
    console.log(self); // self就是变量arr
    return true;
});

//demo2
var
    r,
    arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];

r = arr.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});

console.log(r);

//demo3 判断是否是素数

function get_primes(arr) {
  return arr.filter(function(number){
    if (number < 2) {
      return false;
    } else {
      for (var j = 2; j <= Math.sqrt(number); j++) {
        if (number % j == 0) {
          return false;
        }
      }
    }
    return true;
  });
}

// 测试:
var
    x,
    r,
    arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败: ' + r.toString());
}
