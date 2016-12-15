//0 1 1 2 3 5 8 13 21 34 ...
//要编写一个产生斐波那契数列的函数，可以这么写：

function fib(max) {
    var
        t,
        a = 0,
        b = 1,
        arr = [0, 1];
    while (arr.length < max) {
        t = a + b;
        a = b;
        b = t;
        arr.push(t);
    }
    return arr;
}

// 测试:
console.log(fib(5)); // [0, 1, 1, 2, 3]
console.log(fib(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//generator
function* fib2(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 1;
    while (n < max) {
        yield a;
        t = a + b;
        a = b;
        b = t;
        n ++;
    }
    return t;
}
var f = fib2(5);
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
