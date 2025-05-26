// 数据

let v // 声明变量
let _v = 1 // 声明并赋值
let _v1 = 'a', _v2 = 1

const c = null // 声明常量，常量必须在声明时赋值

// let 和 const 都受作用域限制
{
    let l = 1
    console.log(l)
}
// console.log(l) // ReferenceError

// 使用 var 声明变量不受作用域限制，全局可用
{
    var l = 5
    // glo = 10 // 不使用关键字声明的变量默认为 var 变量，deno 中会报错
}
console.log(l)
console.log(glo)

v = 1                           // 整数数值
v = 0x10                        // 十六进制字面量
v = 0o10                        // 八进制字面量
v = 0b10                        // 二进制字面量
v = Infinity                    // 正无穷
v = Number.POSITIVE_INFINITY    // 同上
v = -Infinity                   // 负无穷
v = Number.NEGATIVE_INFINITY    // 同上
v = NaN                         // 非数值
v = Number.NaN                  // 同上
v = 123n                        // BigInt 字面量
v = 0.01;                       // 实数数值
v = 1.01E-2                     // 科学计数法
v = "hello world"               // 字符串
v = 'JavaScript'                // 单引号声明字符串
v = `Here is ${v}`              // 反引号声明字符串，这个形式可以使用插值
v = true                        // 布尔值真
v = false                       // 布尔值假
v = null                        // 空值
v = undefined                   // 未定义值
v = Symbol()                    // 符号
v = {}                          // 对象，一对花括号表示空对象
v = []                          // 数组

// 续行，实际只有一行
v = 'hello \
world'

// 反引号可以声明多行字符串
v = `hello 
world`

// 如果反引号声明的字符串前面有一个函数名，这个字符串会作为参数传入
console.log(String.raw`\n`.length)

// 正则表达式
v = /^\d\w$/

// 日期时间
let now = Date.now()

// 数组
v = [1, 2, 3]
v = [1,,,,5]        // 声明一个包含五个元素的数组，空元素被初始化为 undefine
v[0]                // 索引访问
v.at(-1)      // 支持负值索引
v.length            // 数组长度
v = []              // 空数组，length 值为 0

// 解构
v = { name: 'JavaScript', type: 'dynamic' }
let { name, type, test } = v
console.log(`name: ${name}, type: ${type}, test: ${test})`)
let { name: n, type: t }  = v
console.log(`name: ${n}, type: ${t}`)
v = [132, 456]
let [x, y, z] = v
console.log(`x: ${x}, y: ${y}, z: ${z}`)

v = [1, 2, 3, 4]
let [x1, ...y1] = v
console.log(`x = ${x1}, y: ${y1}`)
