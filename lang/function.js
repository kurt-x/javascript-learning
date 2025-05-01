// 函数

function plus1(x) { return x + 1 }

// 函数也是对象
let f
f = function (x) { return x + 1 }
f = function pls1(x) { return x + 1 }
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

let obj = {
    name: 'obj',
    test1: function () { console.log(this.name) },
    test2: () => { console.log(this.name) },
}

obj.test1()
obj.test2()

// 构造函数
obj = new Object()
obj = new Object

function getProps(o, c, a = new Array(c), ...other)
// 如果没有传入参数 a，默认 a 为元素数为 c 的数组，other 为可变长参数列表，必须放在最后，other 默认为空数组
{
    // arguments 是预定义的参数列表对象，不推荐使用
    for (let arg in arguments) console.log(arg)
    for (let p in o) a.push(p)
    return a
}

function deconstruction([a, b], { x, y = 0 }) {}

function deconstruction2({x: x1, y: y1}, {x: x2, y: y2 = 0}) {}

function callOnce() { return callOnce.counter++ }
callOnce.counter = 0

// 立即调用函数
;(function () { console.log('Call the function immediately')}())

let count = (function () {
    let counter = 0;
    return function () { return counter++ }
}())

console.log(count())
console.log(count())

obj = { name: 'this' }
function logThis() { console.log(this) }

logThis()
logThis.call(obj)
logThis.apply(obj)
logThis.bind(obj)()
logThis()

// 函数对象的构造函数，前面的参数定义函数的参数列表，最后一个参数定义函数体
f = new Function('arg', 'console.log(arg)')
f('test')
