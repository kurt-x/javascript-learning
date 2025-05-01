// 数组

let arr = [1, 3, 5.5, true, 'a',,]  // 数组可以包含任意类型，最后一个元素是 undefined

arr = new Array(10)             // 创建有 10 个元素的数组
arr = new Array(1, true, 'a')   // 和 [] 形式相同，一般不用

let ext = [1, ...arr, 'end']    // 使用已有的数组填充

Array.of()                  // []
Array.of(10)                // [10]
Array.of(1, 2, 3)           // [1, 2, 3]

Array.from(arr)             // [...arr]
arr = [1, 2, 3]
Array.from(arr, x => x + 1) // [2, 3, 4]

// 数组下标使用 32 位无符号整数，数组最多有 2^32 - 1 个元素
arr = [1]
console.log(`arr: ${arr}, len: ${arr.length}`)
arr[1] = 2
console.log(`arr: ${arr}, len: ${arr.length}`)
arr[4] = 5
console.log(`arr: ${arr}, len: ${arr.length}`)
arr[-1.23] = 'attr_value'
console.log(`arr: ${arr}, len: ${arr.length}, attr[-1.23]: ${arr['-1.23']}`)
arr['9'] = 10
console.log(`arr: ${arr}, len: ${arr.length}, attr[-1.23]: ${arr['-1.23']}`)
arr.length = 5 // 设置数组长度，若比原来的数组短，会截断数组
console.log(`arr: ${arr}, len: ${arr.length}, attr[-1.23]: ${arr['-1.23']}`)
// 下标索引就是一种特殊的对象属性
console.log(arr[20]) // undefined

arr.push(6, 7)  // 在末尾添加值
console.log(`arr: ${arr}, len: ${arr.length}`)
arr.unshift(0)  // 在开头添加值
console.log(`arr: ${arr}, len: ${arr.length}`)
arr.pop()       // 删除最后一个元素
console.log(`arr: ${arr}, len: ${arr.length}`)
arr.shift()     // 删除第一个元素
console.log(`arr: ${arr}, len: ${arr.length}`)
delete arr[4]   // 删除指定元素，不影响 length
console.log(`arr: ${arr}, len: ${arr.length}`)

arr = [1, 2, 3]
console.log(arr.concat(4, 5))
console.log(arr.concat([4, 5], [6, 7]))
console.log(arr.concat(4, [5, [6, 7]]))
console.log(arr) // [1, 2 ,3]

Array.isArray([]) // true
Array.isArray({}) // false

// 字符串使用的是 UTF-16 字符数组
let str = '中国'
console.log(str[0])
