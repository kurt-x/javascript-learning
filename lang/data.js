// 数据

let v // 声明变量
let _v = 1 // 声明并赋值
let _v1 = 'a', _v2 = 1
_v3 = 1 // 也可以不声明直接定义

v = 1               // 整数数值
v = 0.01;           // 实数数值
v = "hello world"   // 字符串
v = 'JavaScript'    // 单引号声明字符串
v = true            // 布尔值真
v = false           // 布尔值假
v = null            // 空值
v = undefined       // 未定义值

// 对象
v = { name: "JavaScript", }

v.name              // 访问对象属性
v["name"]           // 另一种访问方式
v = {}              // 空对象

// 条件访问
v?.name

// 数组
v = [1, 2, 3]
v[0]                // 索引访问
v.length            // 数组长度
v = []              // 空数组，length 值为 0
