// 函数

function plus1(x) { return x + 1 }

// 函数也是对象
let f = function (x) { return x + 1 }
// 箭头函数（lambda）
f = x => x + 1
f = (a, b) => a + b
f = () => 1

// 执行字符串中的代码
eval('console.log("from eval")')

let cus_eval = eval

cus_eval('console.log("from custom eval")')

let v = "variant"
console.log(eval('v'))

// eval 定义的局部变量无法带出
eval('let va = 1')
// console.log(va) // ReferenceError
